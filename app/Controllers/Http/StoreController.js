'use strict'

const Store = use('App/Models/Store');
const S3 = require('../../Infra/aws/s3/s3');

const {formatNumber, formatBucketS3Name, getBucket} = require('../../utils/utils');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with stores
 */
class StoreController {
  /**
   * Show a list of all stores.
   * GET stores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

    try {
      const stores = Store.all()
      return stores
    } catch (error) {
      return error
    }

  }

  /**
   * Render a form to be used for creating a new store.
   * GET stores/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new store.
   * POST stores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {

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
      "id_company",
      "id_user_creator",
      "bucket_name",
      "active"
    ])

    data['nr_cnpj'] = formatNumber(data['nr_cnpj'])
    const bucket = await getBucket(auth.user.id)

    if(bucket == false || bucket == '') {
      return response.status(400).json({"error": "Bucket not found"})
    } 

    const awsS3 = new S3();

    const folder = formatBucketS3Name(data['nm_corporate_name'])
    
    awsS3.createAlbum(bucket, folder)    
    
    data['bucket_name'] = bucket +'/'+ folder
    
    try {
      const store = await Store.create(data)
      return store
    } catch (error) {
      return error
    }

  }

  /**
   * Display a single store.
   * GET stores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {

    try {
      const store = await Store.findOrFail(params.id)
      await store.load('company')
      await store.load('users')
      await store.load('store_customization')

      return store
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing store.
   * GET stores/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update store details.
   * PUT or PATCH stores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    try {
      const store = await Store.findOrFail(params.id)
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
        "id_company",
        "id_user_creator",
        "active"
      ])

      data['nr_cnpj'] = formatNumber(data['nr_cnpj'])
      

      store.merge(data)
      await store.save()

      return store
    } catch (error) {
      return error
    }


  }

  /**
   * Delete a store with id.
   * DELETE stores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const store = await Store.findOrFail(params.id)

      await store.delete()
    } catch (error) {
      return error
    }


  }


}

module.exports = StoreController
