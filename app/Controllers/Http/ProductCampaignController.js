'use strict'

const ProductCampaign = use('App/Models/ProductCampaign')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productcampaigns
 */
class ProductCampaignController {
  /**
   * Show a list of all productcampaigns.
   * GET productcampaigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const productCampaings = await ProductCampaign.all()
    return productCampaings
  }

  /**
   * Render a form to be used for creating a new productcampaign.
   * GET productcampaigns/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new productcampaign.
   * POST productcampaigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_product",
      "id_campaign",
      "active"
    ])

    const productCampaign = await ProductCampaign.create(data)

    return productCampaign
  }

  /**
   * Display a single productcampaign.
   * GET productcampaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const productCampaign = await ProductCampaign.findOrFail(params.id)

    await productCampaign.load('products')
    await productCampaign.load('campaigns')

    return productCampaign
  }

  /**
   * Render a form to update an existing productcampaign.
   * GET productcampaigns/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update productcampaign details.
   * PUT or PATCH productcampaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const productCampaign = await ProductCampaign.findOrFail(params.id)
    const data = request.only([
      "id_product",
      "id_campaign",
      "active"
    ])
    
    productCampaign.merge(data)
    await productCampaign.save()

    return productCampaign
  }

  /**
   * Delete a productcampaign with id.
   * DELETE productcampaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const productCampaign = await ProductCampaign.findOrFail(params.id)
    await productCampaign.delete()
  }
}

module.exports = ProductCampaignController
