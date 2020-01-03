'use strict'

const PaymentBill = use('App/Models/PaymentBill')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with paymentbills
 */
class PaymentBillController {
  /**
   * Show a list of all paymentbills.
   * GET paymentbills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const paymentBills = await PaymentBill.all()
    return paymentBills
  }

  /**
   * Render a form to be used for creating a new paymentbill.
   * GET paymentbills/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new paymentbill.
   * POST paymentbills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "nm_assignor",
      "nr_agency",
      "nr_bill",
      "nr_document",
      "nr_bill_value",
      "nr_bin",
      "dt_end_payment_date",
      "nr_our_number",
      "nr_document_number",
      "id_order"
    ])

    const paymentBill = await PaymentBill.create(data)
    return paymentBill
  }

  /**
   * Display a single paymentbill.
   * GET paymentbills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const paymentBill = await PaymentBill.findOrFail(params.id)
    await paymentBill.load('orders')
    return paymentBill
  }

  /**
   * Render a form to update an existing paymentbill.
   * GET paymentbills/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update paymentbill details.
   * PUT or PATCH paymentbills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const paymentBill = await PaymentBill.findOrFail(params.id)
    const data = request.only([
      "nm_assignor",
      "nr_agency",
      "nr_bill",
      "nr_document",
      "nr_bill_value",
      "nr_bin",
      "dt_end_payment_date",
      "nr_our_number",
      "nr_document_number",
      "id_order"
    ])

    paymentBill.merge(data)
    await paymentBill.save()
    return paymentBill
  }

  /**
   * Delete a paymentbill with id.
   * DELETE paymentbills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const paymentBill = await PaymentBill.findOrFail(params.id)
    await paymentBill.destroy()
  }
}

module.exports = PaymentBillController
