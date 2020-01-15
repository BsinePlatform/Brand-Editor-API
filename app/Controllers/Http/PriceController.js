'use strict'

const Price = use('App/Models/Price')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with prices
 */
class PriceController {
  /**
   * Show a list of all prices.
   * GET prices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new price.
   * GET prices/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {

  }

  /**
   * Create/save a new price.
   * POST prices
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_product",
        "nr_qty_min",
        "nr_qty_max",
        "nr_price_unit",
        "nr_price_promo",
        "active"
      ])

      const price = await Price.create(data)

      return price

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single price.
   * GET prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const price = await Price.findOrFail(params.id)

      await price.load('products')

      return price

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing price.
   * GET prices/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update price details.
   * PUT or PATCH prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const price = await Price.findOrFail(params.id)
      const data = request.only([
        "id_product",
        "nr_qty_min",
        "nr_qty_max",
        "nr_price_unit",
        "nr_price_promo",
        "active"
      ])

      price.merge(data)
      await price.save()

      return price

    } catch (error) {
      return error
    }

  }

  /**
   * Delete a price with id.
   * DELETE prices/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const price = await Price.findOrFail(params.id)

      await price.delete()

    } catch (error) {
      return error
    }
  }
}

module.exports = PriceController
