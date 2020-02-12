'use strict'

const Company = use('App/Models/Company');
const Gallery = use('App/Models/Gallery');
const AwsS3 = require('../../Infra/aws/s3/s3');
const {generateRandomName, formatNumber, formatBucketS3Name} = require('../../utils/utils'); 
const fs = require('fs');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const companies = Company.all()

      return companies

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new company.
   * GET companies/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new company.
   * POST companies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    try {
      const data = request.only([
        "nm_corporate_name",
        "nm_fantasy_name",
        "nr_cnpj",
        "nr_inscricao_estadual",
        "nr_ccm",
        "nm_initials",
        "nm_responsible",
        "nm_responsible_email",
        "nr_responsible_ddi",
        "nr_responsible_ddd",
        "nr_responsible_phone",
        "nr_responsible_phone_extension",
        "dt_born",
        "nm_country",
        "nm_state",
        "nm_city",
        "nm_street",
        "nm_neighborhood",
        "nm_public_place",
        "nm_complement",
        "nm_complement_01",
        "nr_number",
        "nr_zip_code",
        "nr_ddi_phone_commercial",
        "nr_ddd_phone_commercial",
        "nr_phone_commercial",
        "nr_phone_commercial_extension",
        "nr_ddi",
        "nr_ddd",
        "nr_phone",
        "nr_ddi_01",
        "nr_ddd_01",
        "nr_phone_01",
        "nr_ddi_02",
        "nr_ddd_02",
        "nr_phone_02",
        "nr_ddi_cellphone",
        "nr_ddd_cellphone",
        "nr_cellphone",
        "nm_skype",
        "nm_facebook",
        "nr_whatsapp",
        "nm_linkedin",
        "nm_twitter",
        "nm_site",
        "path_img_profile",
        "bucket_name",
        "id_user_creator",
        "active"
      ]) 

      // Movendo a imagem do perfil para uma pasta temporária
      const profilePic = request.file('path_img_profile', {
        types: ['image'],
        size: '2mb'
      })

      var hasDir = './tmp/uploads/profile/'+auth.user.id;

      if (!fs.existsSync(hasDir)){
        fs.mkdirSync(hasDir, { recursive: true }, (err) => {
          if(err) {
            return err
          }
        });
      }
    
      await profilePic.move(hasDir, {
        name:  generateRandomName()+'.'+profilePic.extname,
        overwrite: true
      })

      if (!profilePic.moved()) {
        return profilePic.error()
      }

      data['nr_cnpj'] = formatNumber(data['nr_cnpj'])
      data['bucket_name'] = formatBucketS3Name(data['nm_corporate_name']) + data['nr_cnpj'] 
      
      const awsS3 = new AwsS3()
      
      const foldersDefault = ['Imagens', 'Videos', 'Audios', 'Downloads', 'Documentos']
      const result = awsS3.createBucketInS3(data['bucket_name'])
      
      result.then(function(bucketName) {
        foldersDefault.map(folder => {
          awsS3.createAlbum(bucketName, folder)
        }) 
        fs.readdirSync(hasDir).find(function(file) { 
          if(file == profilePic.fileName) {
            awsS3.uploadFileS3(bucketName, hasDir+'/'+file).then(function(path_file){
              data['path_img_profile'] = path_file
              const company = Company.create(data)
              company.then(function(companyCreated){
                foldersDefault.map(folder => {
                  let dataGallery = {
                    nm_gallery: folder,
                    id_user_creator: auth.user.id,
                    path_s3: bucketName + '/' + folder,
                    id_company: companyCreated.id
                  }
        
                  Gallery.create(dataGallery)
        
                })
              }).catch(function(error){
                return error
              })
            })
          }
        })
      } ).catch(function(err) {
        throw err
      });
    } catch (error) {
      return error
    }

  }

  /**
   * Display a single company.
   * GET companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {

    try {
      const company = await Company.findOrFail(params.id)

      await company.load('users')
      await company.load('stores')
      await company.load('categories')
      await company.load('campaign')
      await company.load('company_customization')
      await company.load('galleries')

      return company

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing company.
   * GET companies/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update company details.
   * PUT or PATCH companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    try {
      const company = await Company.findOrFail(params.id)
      const data = request.only([
        "nm_corporate_name",
        "nm_fantasy_name",
        "nr_cnpj",
        "nr_inscricao_estadual",
        "nr_ccm",
        "nm_initials",
        "nm_responsible",
        "nm_responsible_email",
        "nr_responsible_ddi",
        "nr_responsible_ddd",
        "nr_responsible_phone",
        "nr_responsible_phone_extension",
        "dt_born",
        "nm_country",
        "nm_state",
        "nm_city",
        "nm_street",
        "nm_neighborhood",
        "nm_public_place",
        "nm_complement",
        "nm_complement_01",
        "nr_number",
        "nr_zip_code",
        "nr_ddi_phone_commercial",
        "nr_ddd_phone_commercial",
        "nr_phone_commercial",
        "nr_phone_commercial_extension",
        "nr_ddi",
        "nr_ddd",
        "nr_phone",
        "nr_ddi_01",
        "nr_ddd_01",
        "nr_phone_01",
        "nr_ddi_02",
        "nr_ddd_02",
        "nr_phone_02",
        "nr_ddi_cellphone",
        "nr_ddd_cellphone",
        "nr_cellphone",
        "nm_skype",
        "nm_facebook",
        "nr_whatsapp",
        "nm_linkedin",
        "nm_twitter",
        "nm_site",
        "path_img_profile",
        "bucket_name",
        "id_user_creator",
        "active"
      ])

      company.merge(data)
      await company.save()

      return company

    } catch (error) {
      return error
    }
  }

  /**
   * Delete a company with id.
   * DELETE companies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {

    try {
      const company = await Company.findOrFail(params.id)

      await company.delete()

    } catch (error) {
      return error
    }
  }

}

module.exports = CompanyController
