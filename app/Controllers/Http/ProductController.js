'use strict'

const Product = use('App/Models/Product')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const products = await Product.all()

      return products

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_subcategory",
        "nm_product",
        "dt_ini",
        "dt_end",
        "nr_production_period",
        "nr_stock_control",
        "nr_sold_out",
        "nr_launch",
        "nr_best_seller",
        "nr_featured",
        "active",
        "nm_reduced_description",
        "nm_full_description",
        "nr_customizable",
        "id_user_creator",
        "nr_other_taxes",
        "nr_initial_price",
        "nr_initial_weight",
        "nr_final_weight",
        "nr_calculate_format",
        "nr_buy_limit",
        "sc_measurement",
        "nr_unit_weight",
        "nr_unit_width",
        "nr_unit_length",
        "nr_unit_height",
        "nr_enable_unit_price",
        "nr_enable_additional_value",
        "nr_show_price",
        "nm_keyword"
      ])

      const product = await Product.create(data)

      return product

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const product = await Product.findOrFail(params.id)

      await product.load('subcategory')
      await product.load('users')
      await product.load('images')
      await product.load('prices')
      await product.load('personalizations')

      return product

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const product = await Product.findOrFail(params.id)
      const data = request.only([
        "id_subcategory",
        "nm_product",
        "dt_ini",
        "dt_end",
        "nr_production_period",
        "nr_stock_control",
        "nr_sold_out",
        "nr_launch",
        "nr_best_seller",
        "nr_featured",
        "active",
        "nm_reduced_description",
        "nm_full_description",
        "nr_customizable",
        "id_user_creator",
        "nr_other_taxes",
        "nr_initial_price",
        "nr_initial_weight",
        "nr_final_weight",
        "nr_calculate_format",
        "nr_buy_limit",
        "sc_measurement",
        "nr_unit_weight",
        "nr_unit_width",
        "nr_unit_length",
        "nr_unit_height",
        "nr_enable_unit_price",
        "nr_enable_additional_value",
        "nr_show_price",
        "nm_keyword"
      ])

      product.merge(data)
      await product.save()

      return product

    } catch (error) {
      return error
    }


  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const product = await Product.findOrFail(params.id)

      await product.delete()

    } catch (error) {
      return error
    }
  }
}

module.exports = ProductController
