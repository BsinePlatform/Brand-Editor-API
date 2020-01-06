'use strict'

const OrderItems = use('App/Models/OrderItem')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with orderitems
 */
class OrderItemController {
  /**
   * Show a list of all orderitems.
   * GET orderitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const orderItems = await OrderItems.all();
    return orderItems
  }

  /**
   * Render a form to be used for creating a new orderitem.
   * GET orderitems/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new orderitem.
   * POST orderitems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "nr_qty",
      "nr_price",
      "nr_total",
      "id_order",
      "id_product"
    ])
    const orderItems = await OrderItems.create(data)
    return orderItems
  }

  /**
   * Display a single orderitem.
   * GET orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const orderItems = await OrderItems.findOrFail(params.id)
    await orderItems.load('order')
    await orderItems.load('product')
    return orderItems
  }

  /**
   * Render a form to update an existing orderitem.
   * GET orderitems/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update orderitem details.
   * PUT or PATCH orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const orderItems = await OrderItems.findOrFail(params.id)
    const data = request.only([
      "nr_qty",
      "nr_price",
      "nr_total",
      "id_order",
      "id_product"
    ])
    orderItems.merge(data)
    await orderItems.save()
    return orderItems

  }

  /**
   * Delete a orderitem with id.
   * DELETE orderitems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const orderItems = await OrderItems.findOrFail(params.id)
    await orderItems.delete()
  }
}

module.exports = OrderItemController
