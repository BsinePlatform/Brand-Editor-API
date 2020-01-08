'use strict'

const FilePermission = use('App/Models/FilePermission')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with filepermissions
 */
class FilePermissionController {
  /**
   * Show a list of all filepermissions.
   * GET filepermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const filePermissions = await FilePermission.all()
    return filePermissions
  }

  /**
   * Render a form to be used for creating a new filepermission.
   * GET filepermissions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new filepermission.
   * POST filepermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_file",
      "id_user",
      "id_department",
      "id_store",
      "id_company",
    ])

    const filePermission = await FilePermission.create(data)
    return filePermission
  }

  /**
   * Display a single filepermission.
   * GET filepermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const filePermission = await FilePermission.findOrFail(params.id)
    await filePermission.load('file')
    await filePermission.load('user')
    await filePermission.load('department')
    await filePermission.load('store')
    await filePermission.load('company')

    return filePermission
  }

  /**
   * Render a form to update an existing filepermission.
   * GET filepermissions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update filepermission details.
   * PUT or PATCH filepermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const filePermission = await FilePermission.findOrFail(params.id)
    const data = request.only([
      "id_file",
      "id_user",
      "id_department",
      "id_store",
      "id_company"
    ])

    filePermission.merge(data)
    await filePermission.save()
    return filePermission
  }

  /**
   * Delete a filepermission with id.
   * DELETE filepermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const filePermission = await FilePermission.findOrFail(params.id)
    await filePermission.delete()
  }
}

module.exports = FilePermissionController
