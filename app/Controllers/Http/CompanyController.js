'use strict'

const Company = use('App/Models/Company')
const AwsS3 = require('../../Infra/aws/s3/s3');
const FormatNumber = require('../../utils/formatNumber');
const FormatBucket = require('../../utils/formatBucketS3Name');

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
  async store({ request, response }) {
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
        "id_company_customization",
        "active"
      ])

      data['nr_cnpj'] = FormatNumber(data['nr_cnpj'])
      data['bucket_name'] = FormatBucket(data['nm_corporate_name'], data['nr_cnpj']);
      const company = await Company.create(data);

      if (company) {
        const newBucket = new AwsS3();
        const resp = newBucket.createBucketInS3(data['bucket_name']);
      }

      return company;

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
      await company.load('company_customization')

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
        "id_company_customization",
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
