'use strict'

const Personalization = use('App/Models/Personalization')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with personalizations
 */
class PersonalizationController {
  /**
   * Show a list of all personalizations.
   * GET personalizations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const personalizations = Personalization.all();

    return personalizations;
  }

  /**
   * Render a form to be used for creating a new personalization.
   * GET personalizations/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new personalization.
   * POST personalizations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_product",
      "nm_template_type",
      "nr_cod_item",
      "nr_file_upload",
      "nr_show_form",
      "nr_buy_after_personalize",
      "nr_deadline",
      "nr_credit_value_client",
      "nr_download_ok_deadline",
      "nr_qty_download",
      "nr_content_approval"
    ])

    const personalization = await Personalization.create(data)

    return personalization
  }

  /**
   * Display a single personalization.
   * GET personalizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const personalization = await Personalization.findOrFail(params.id)

    await personalization.load('products')

    return personalization
  }

  /**
   * Render a form to update an existing personalization.
   * GET personalizations/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update personalization details.
   * PUT or PATCH personalizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const personalization = await Personalization.findOrFail(params.id)

    const data = request.only([
      "id_product",
      "nm_template_type",
      "nr_cod_item",
      "nr_file_upload",
      "nr_show_form",
      "nr_buy_after_personalize",
      "nr_deadline",
      "nr_credit_value_client",
      "nr_download_ok_deadline",
      "nr_qty_download",
      "nr_content_approval"
    ])

    personalization.merge(data);

    await personalization.save();

    return personalization;
  }

  /**
   * Delete a personalization with id.
   * DELETE personalizations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const personalization = await Personalization.findOrFail(params.id)

    await personalization.delete();
  }
}

module.exports = PersonalizationController
