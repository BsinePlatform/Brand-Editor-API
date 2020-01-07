'use strict'

const Feature = use('App/Models/Feature')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with features
 */
class FeatureController {
  /**
   * Show a list of all features.
   * GET features
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const features = await Feature.all()
    return features
  }

  /**
   * Render a form to be used for creating a new feature.
   * GET features/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new feature.
   * POST features
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "nm_feature",
      "active"
    ])
    const feature = await Feature.create(data)
    return feature
  }

  /**
   * Display a single feature.
   * GET features/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const features = await Feature.findOrFail(params.id)
    return features
  }

  /**
   * Render a form to update an existing feature.
   * GET features/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update feature details.
   * PUT or PATCH features/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const feature = await Feature.findOrFail(params.id)
    const data = request.only([
      "nm_feature",
      "active"
    ])
    feature.merge(data)
    await feature.save()
    return feature
  }

  /**
   * Delete a feature with id.
   * DELETE features/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const feature = await Feature.findOrFail(params.id)
    await feature.delete()
  }
}

module.exports = FeatureController
