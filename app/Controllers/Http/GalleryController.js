'use strict'

const Gallery = use('App/Models/Gallery')

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
  async index ({ request, response, view }) {
    const gallery = await Gallery.all();
    return gallery;
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
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new gallery.
   * POST galleries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_user_creator",
      "nm_gallery"
    ])

    const gallery = await Gallery.create(data)
    return gallery;
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
  async show ({ params, request, response, view }) {
    const gallery = await Gallery.findOrFail(params.id)
    await gallery.load('users')
    return gallery
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
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update gallery details.
   * PUT or PATCH galleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const gallery = await Gallery.findOrFail(params.id);
    const data = request.only([
      "id_user_creator",
      "nm_gallery"
    ])

    gallery.merge(data);
    await gallery.save();
    return gallery;

  }

  /**
   * Delete a gallery with id.
   * DELETE galleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const gallery = await Gallery.findOrFail(params.id)
    await gallery.delete();
  }
}

module.exports = GalleryController
