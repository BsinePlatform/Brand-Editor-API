'use strict'

const AdditionalFeature = use('App/Models/AdditionalFeature')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with additionalfeatures
 */
class AdditionalFeatureController {
  /**
   * Show a list of all additionalfeatures.
   * GET additionalfeatures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const additionalFeatures = await AdditionalFeature.all()
      return additionalFeatures
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new additionalfeature.
   * GET additionalfeatures/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new additionalfeature.
   * POST additionalfeatures
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_feature",
        "nm_additional_feature",
        "nr_additional_value",
        "nr_additional_weight",
        "path_img_feature",
        "active",
        "id_calculation_factor",
        "nr_additional_height"
      ])

      const additionalFeature = await AdditionalFeature.create(data)
      return additionalFeature
    } catch (error) {
      return error
    }

  }

  /**
   * Display a single additionalfeature.
   * GET additionalfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const additionalFeature = await AdditionalFeature.findOrFail(params.id)
      await additionalFeature.load('feature')
      return additionalFeature
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing additionalfeature.
   * GET additionalfeatures/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update additionalfeature details.
   * PUT or PATCH additionalfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const additionalFeature = await AdditionalFeature.findOrFail(params.id)
      const data = request.only([
        "id_feature",
        "nm_additional_feature",
        "nr_additional_value",
        "nr_additional_weight",
        "path_img_feature",
        "active",
        "id_calculation_factor",
        "nr_additional_height"
      ])
      additionalFeature.merge(data)
      await additionalFeature.save()

      return additionalFeature
    } catch (error) {
      return error
    }

  }

  /**
   * Delete a additionalfeature with id.
   * DELETE additionalfeatures/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const additionalFeature = await AdditionalFeature.findOrFail(params.id)
      await additionalFeature.delete()
    } catch (error) {
      return error
    }
  }
}

module.exports = AdditionalFeatureController
