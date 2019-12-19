'use strict'

const ProductPermission = use('App/Models/ProductPermission')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productpermissions
 */
class ProductPermissionController {
  /**
   * Show a list of all productpermissions.
   * GET productpermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const productPermission = await ProductPermission.all()
    return productPermission;
  }

  /**
   * Render a form to be used for creating a new productpermission.
   * GET productpermissions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new productpermission.
   * POST productpermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_product",
      "id_store",
      "nm_state"
    ]);

    const productPermission = await ProductPermission.create(data)

    return productPermission
  }

  /**
   * Display a single productpermission.
   * GET productpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const productPermission = await ProductPermission.findOrFail(params.id)

    await productPermission.load('products')
    await productPermission.load('stores')

    return productPermission
  }

  /**
   * Render a form to update an existing productpermission.
   * GET productpermissions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update productpermission details.
   * PUT or PATCH productpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const productPermission = await ProductPermission.findOrFail(params.id)
    const data = request.only([
      "id_product",
      "id_store",
      "nm_state"
    ]);

    productPermission.merge(data)
    await productPermission.save()
    return productPermission
  }

  /**
   * Delete a productpermission with id.
   * DELETE productpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const productPermission = await ProductPermission.findOrFail(params.id)
    await productPermission.delete();
  }
}

module.exports = ProductPermissionController
