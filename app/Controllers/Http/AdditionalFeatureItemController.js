'use strict'

const AdditionalFeatureItem = use('App/Models/AdditionalFeatureItem')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with additionalfeatureitems
 */
class AdditionalFeatureItemController {
  /**
   * Show a list of all additionalfeatureitems.
   * GET additionalfeatureitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const additionalFeatureitems = await AdditionalFeatureItem.all()
    return additionalFeatureitems
  }

  /**
   * Render a form to be used for creating a new additionalfeatureitem.
   * GET additionalfeatureitems/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new additionalfeatureitem.
   * POST additionalfeatureitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_order_item",
      "id_additional_feature"
    ])

    const additionalFeatureItem = await AdditionalFeatureItem.create(data)
    return additionalFeatureItem
  }

  /**
   * Display a single additionalfeatureitem.
   * GET additionalfeatureitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
    await additionalFeatureItem.load('orderItem')
    await additionalFeatureItem.load('additionalFeature')

    return additionalFeatureItem
  }

  /**
   * Render a form to update an existing additionalfeatureitem.
   * GET additionalfeatureitems/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /** 
   * Update additionalfeatureitem details.
   * PUT or PATCH additionalfeatureitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
    const data = request.only([
      "id_order_item",
      "id_additional_feature"
    ])

    additionalFeatureItem.merge(data)
    await additionalFeatureItem.save()
    return additionalFeatureItem
  }

  /**
   * Delete a additionalfeatureitem with id.
   * DELETE additionalfeatureitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
    await additionalFeatureItem.delete()
  }
}

module.exports = AdditionalFeatureItemController
