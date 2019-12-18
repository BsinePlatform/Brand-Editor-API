'use strict'

const CompaniesCustomization = use('App/Models/CompaniesCustomization')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with companiescustomizations
 */
class CompaniesCustomizationController {
  /**
   * Show a list of all companiescustomizations.
   * GET companiescustomizations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const companiesCustomization = CompaniesCustomization.all()

    return companiesCustomization
  }

  /**
   * Render a form to be used for creating a new companiescustomization.
   * GET companiescustomizations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new companiescustomization.
   * POST companiescustomizations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only([
      "path_img_logo",
      "path_img_brand",
      "path_img_background",
      "nm_color_background",
      "path_img_main_banner",
      "path_img_second_banner",
      "nr_style_header",
      "nr_style_menu",
      "nr_style_footer",
      "nm_color_header",
      "nm_color_menu",
      "nm_color_footer",
      "nm_slogan",
      "nm_main_phrase",
      "nm_second_phrase",
      "nm_color_main",
      "nm_color_second",
      "nm_color_third",
      "nm_font_main",
      "nm_font_second",
      "nm_font_third",
      "nm_font_size_main",
      "nm_font_size_second",
      "nm_font_size_third",
      "id_company",
      "id_user_creator"
    ])

    const companyCustomization = await CompaniesCustomization.create(data)

    return companyCustomization

  }

  /**
   * Display a single companiescustomization.
   * GET companiescustomizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const companyCustomization = await CompaniesCustomization.findOrFail(params.id)

    await companyCustomization.load('user')
    await companyCustomization.load('company')
    await companyCustomization.load('stores')

    return companyCustomization
  }

  /**
   * Render a form to update an existing companiescustomization.
   * GET companiescustomizations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update companiescustomization details.
   * PUT or PATCH companiescustomizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const companyCustomization = await CompaniesCustomization.findOrFail(params.id)
    const data = request.only([
      "path_img_logo",
      "path_img_brand",
      "path_img_background",
      "nm_color_background",
      "path_img_main_banner",
      "path_img_second_banner",
      "nr_style_header",
      "nr_style_menu",
      "nr_style_footer",
      "nm_color_header",
      "nm_color_menu",
      "nm_color_footer",
      "nm_slogan",
      "nm_main_phrase",
      "nm_second_phrase",
      "nm_color_main",
      "nm_color_second",
      "nm_color_third",
      "nm_font_main",
      "nm_font_second",
      "nm_font_third",
      "nm_font_size_main",
      "nm_font_size_second",
      "nm_font_size_third",
      "id_company",
      "id_user_creator"
    ])

    companyCustomization.merge(data)
    await companyCustomization.save()

    return companyCustomization
  }

  /**
   * Delete a companiescustomization with id.
   * DELETE companiescustomizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
    const companyCustomization = await CompaniesCustomization.findOrFail(params.id)

    await companyCustomization.delete()
  }

}

module.exports = CompaniesCustomizationController
