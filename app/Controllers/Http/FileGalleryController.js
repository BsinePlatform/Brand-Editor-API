'use strict'

const FileGallery = use('App/Models/FileGallery');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with filegalleries
 */
class FileGalleryController {
  /**
   * Show a list of all filegalleries.
   * GET filegalleries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const fileGallery = await FileGallery.all();
    return fileGallery;
  }

  /**
   * Render a form to be used for creating a new filegallery.
   * GET filegalleries/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new filegallery.
   * POST filegalleries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_gallery",
      "id_user_upload",
      "path_file"
    ])

    const fileGallery = await FileGallery.create(data);
    return fileGallery;
  }

  /**
   * Display a single filegallery.
   * GET filegalleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const fileGallery = await FileGallery.findOrFail(params.id);
    await fileGallery.load('gallery')
    await fileGallery.load('user_upload')
    return fileGallery;
  }

  /**
   * Render a form to update an existing filegallery.
   * GET filegalleries/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update filegallery details.
   * PUT or PATCH filegalleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fileGallery = await FileGallery.findOrFail(params.id);
    const data = request.only([
      "id_gallery",
      "id_user_upload",
      "path_file"
    ])

    fileGallery.merge(data)
    await fileGallery.save();
    return fileGallery;
  }

  /**
   * Delete a filegallery with id.
   * DELETE filegalleries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fileGallery = await FileGallery.findOrFail(params.id)
    await fileGallery.delete()
  }
}

module.exports = FileGalleryController
