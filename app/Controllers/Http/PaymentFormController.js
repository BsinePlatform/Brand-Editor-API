'use strict'

const PaymentForm = use('App/Models/PaymentForm')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with paymentforms
 */
class PaymentFormController {
  /**
   * Show a list of all paymentforms.
   * GET paymentforms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const paymentForm = PaymentForm.all();
    return paymentForm;
  }

  /**
   * Render a form to be used for creating a new paymentform.
   * GET paymentforms/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new paymentform.
   * POST paymentforms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "nm_form"
    ])
    const paymentForm = await PaymentForm.create(data)
    return paymentForm
  }

  /**
   * Display a single paymentform.
   * GET paymentforms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const paymentForm = await PaymentForm.findOrFail(params.id)
    return paymentForm
  }

  /**
   * Render a form to update an existing paymentform.
   * GET paymentforms/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update paymentform details.
   * PUT or PATCH paymentforms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const paymentForm = await PaymentForm.findOrFail(params.id)
    const data = request.only([
      "nm_form"
    ])

    paymentForm.merge(data)
    await paymentForm.save()
    return paymentForm
  }

  /**
   * Delete a paymentform with id.
   * DELETE paymentforms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const paymentForm = await PaymentForm.findOrFail(params.id)
    await paymentForm.delete();
  }
}

module.exports = PaymentFormController
