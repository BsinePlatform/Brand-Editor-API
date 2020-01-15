'use strict'

const GalleryPermission = use('App/Models/GalleryPermission')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gallerypermissions
 */
class GalleryPermissionController {
  /**
   * Show a list of all gallerypermissions.
   * GET gallerypermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const galleryPermission = await GalleryPermission.all()
      return galleryPermission

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new gallerypermission.
   * GET gallerypermissions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new gallerypermission.
   * POST gallerypermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_gallery",
        "id_user",
        "id_department",
        "id_store",
        "id_company",
      ])

      const galleryPermission = await GalleryPermission.create(data)
      return galleryPermission

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single gallerypermission.
   * GET gallerypermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const galleryPermission = await GalleryPermission.findOrFail(params.id)
      await galleryPermission.load('gallery')
      await galleryPermission.load('user')
      await galleryPermission.load('department')
      await galleryPermission.load('store')
      await galleryPermission.load('company')

      return galleryPermission

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing gallerypermission.
   * GET gallerypermissions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update gallerypermission details.
   * PUT or PATCH gallerypermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const galleryPermission = await GalleryPermission.findOrFail(params.id)
      const data = request.only([
        "id_gallery",
        "id_user",
        "id_department",
        "id_store",
        "id_company"
      ])

      galleryPermission.merge(data)
      await galleryPermission.save()
      return galleryPermission

    } catch (error) {
      return error
    }

  }

  /**
   * Delete a gallerypermission with id.
   * DELETE gallerypermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const galleryPermission = await GalleryPermission.findOrFail(params.id)
      await galleryPermission.delete()

    } catch (error) {
      return error
    }
  }
}

module.exports = GalleryPermissionController
