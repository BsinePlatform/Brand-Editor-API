'use strict'

const Image = use('App/Models/Image');
const Product = use('App/Models/Product');
const Helpers = use('Helpers');
const GenerateRandomName = require('../../utils/generateRandomName'); 
const userBucket = require('../../utils/getBucket');
const S3 = require('../../Infra/aws/s3/s3');
const fs = require('fs');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  /**
   * Show a list of all images.
   * GET images
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new image.
   * GET images/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new image.
   * POST images
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params, auth }) {
    const product = await Product.findOrFail(params.id);

    const bucket = await userBucket(auth.user.id);

    if(bucket == false || bucket == '') {
      return response.status(400).json({"error": "Bucket not found"})
    }    

    try {

      const images = request.file('image', {
        types: ['image'],
        size: '2mb'
      });

      var hasDir = './tmp/uploads/'+auth.user.id;

      if (!fs.existsSync(hasDir)){
        fs.mkdirSync(hasDir, { recursive: true }, (err) => {
          if(err) {
            return err
          }
        });
      }      

      await images.moveAll(hasDir, file => ({
        name: GenerateRandomName()+'.'+file.extname
      }))


      if (!images.movedAll()) {
        return images.errors()
      }

      const awsS3 = new S3();

      let results = '';
      const selects = fs.readdirSync(hasDir).map(file => awsS3.uploadFileS3(bucket, hasDir+'/'+file));
      await Promise.all(
        selects)
        .then(result => results = result)
        .catch( e => console.log(e)
        );
      

      if(results[0] !== undefined ) { 
        results.map(result => {
          try {
            product.images().create({ path_img: result, bucket_name: bucket })  
          } catch (error) {
            return error
          }
          
        });

        fs.readdirSync(hasDir).map(file => {
          fs.unlinkSync(hasDir +'/'+file);
        })

        return response.status(200).json({"success": `${results.length} files uploaded successfully`})  
      } else {
        return response.status(400).json({"error": "Failed to upload in s3"})
      }     

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single image.
   * GET images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing image.
   * GET images/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update image details.
   * PUT or PATCH images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a image with id.
   * DELETE images/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response}) {
    
    const imageInfo = await Image.findOrFail(params.id);
    
    const path_img = imageInfo.path_img.split('/');
    const file = path_img[path_img.length - 1];

    const bucket = imageInfo.bucket_name;

    if(bucket == false || bucket == '') {
      return response.status(400).json({"error": "Bucket not found"})
    }   

    try {      
      const awsS3 = new S3();
      const result = awsS3.deletePhoto(bucket, file);
      const resp = await result.then(function(status){
        return status
      } ).catch(function(err){
        console.log(err);
        return;
      })

      if(resp){
        await imageInfo.delete();
        return response.status(200).json({"success": "Success to delete the file"})
      }
      return response.status(400).json({"error": "Failed to delete the file"})
      

    } catch (error) {
      return error
    }
  }
}

module.exports = ImageController
