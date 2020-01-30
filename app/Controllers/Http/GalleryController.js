'use strict'

const Gallery = use('App/Models/Gallery');
const S3 = require('../../Infra/aws/s3/s3');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with galleries
 */
class GalleryController {
  /**
   * Show a list of all galleries.
   * GET galleries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const gallery = await Gallery.all();
      return gallery;

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new gallery.
   * GET galleries/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new gallery.
   * POST galleries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_user_creator",
        "nm_gallery",
        "path_s3"
      ])

      const gallery = await Gallery.create(data)
      return gallery;

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single gallery.
   * GET galleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const gallery = await Gallery.findOrFail(params.id)
      await gallery.load('users')
      return gallery

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing gallery.
   * GET galleries/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update gallery details.
   * PUT or PATCH galleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const gallery = await Gallery.findOrFail(params.id);
      const data = request.only([
        "id_user_creator",
        "nm_gallery",
        "path_s3"
      ])

      gallery.merge(data);
      await gallery.save();
      return gallery;

    } catch (error) {
      return error
    }

  }

  /**
   * Delete a gallery with id.
   * DELETE galleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const gallery = await Gallery.findOrFail(params.id)
      await gallery.delete();

    } catch (error) {
      return error
    }
  }
}

module.exports = GalleryController
