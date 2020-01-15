'use strict'

const ProductFeature = use('App/Models/ProductFeature')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productfeatures
 */
class ProductFeatureController {
  /**
   * Show a list of all productfeatures.
   * GET productfeatures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const productFeatures = await ProductFeature.all()
      return productFeatures

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new productfeature.
   * GET productfeatures/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new productfeature.
   * POST productfeatures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        'id_product',
        'id_feature'
      ])

      const productFeature = await ProductFeature.create(data)

      return productFeature

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single productfeature.
   * GET productfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const productFeature = await ProductFeature.findOrFail(params.id)
      await productFeature.load('product')
      await productFeature.load('feature')
      return productFeature

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing productfeature.
   * GET productfeatures/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update productfeature details.
   * PUT or PATCH productfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const productFeature = await ProductFeature.findOrFail(params.id)
      const data = request.only([
        'id_product',
        'id_feature'
      ])
      productFeature.merge(data)
      await productFeature.save()
      return productFeature

    } catch (error) {
      return error
    }
  }

  /**
   * Delete a productfeature with id.
   * DELETE productfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const productFeature = await ProductFeature.findOrFail(params.id)
      await productFeature.delete()

    } catch (error) {
      return error
    }
  }
}

module.exports = ProductFeatureController
