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
  async index({ request, response, view }) {
    try {
      const additionalFeatureitems = await AdditionalFeatureItem.all()
      return additionalFeatureitems
    } catch (error) {
      return error
    }
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
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new additionalfeatureitem.
   * POST additionalfeatureitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_order_item",
        "id_additional_feature"
      ])

      const additionalFeatureItem = await AdditionalFeatureItem.create(data)
      return additionalFeatureItem
    } catch (error) {
      return error
    }
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
  async show({ params, request, response, view }) {
    try {
      const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
      await additionalFeatureItem.load('orderItem')
      await additionalFeatureItem.load('additionalFeature')

      return additionalFeatureItem
    } catch (error) {
      return error
    }
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
  async edit({ params, request, response, view }) {
  }

  /** 
   * Update additionalfeatureitem details.
   * PUT or PATCH additionalfeatureitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
      const data = request.only([
        "id_order_item",
        "id_additional_feature"
      ])

      additionalFeatureItem.merge(data)
      await additionalFeatureItem.save()
      return additionalFeatureItem

    } catch (error) {
      return error
    }
  }

  /**
   * Delete a additionalfeatureitem with id.
   * DELETE additionalfeatureitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const additionalFeatureItem = await AdditionalFeatureItem.findOrFail(params.id)
      await additionalFeatureItem.delete()
    } catch (error) {
      return error
    }
  }
}

module.exports = AdditionalFeatureItemController
