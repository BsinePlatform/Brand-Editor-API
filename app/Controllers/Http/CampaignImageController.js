'use strict'

const CampaingImage = use('App/Models/CampaignImage');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with campaignimages
 */
class CampaignImageController {
  /**
   * Show a list of all campaignimages.
   * GET campaignimages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const campaignimage = await CampaingImage.all();
      return campaignimage;
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new campaignimage.
   * GET campaignimages/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new campaignimage.
   * POST campaignimages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_campaign",
        "path_img",
        "nm_type",
        "active"
      ])

      const campaignimage = await CampaingImage.create(data);
      return campaignimage;

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single campaignimage.
   * GET campaignimages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const campaignimage = await CampaingImage.findOrFail(params.id);
      await campaignimage.load('campaign');
      return campaignimage;

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing campaignimage.
   * GET campaignimages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update campaignimage details.
   * PUT or PATCH campaignimages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const campaignimage = await CampaingImage.findOrFail(params.id);
      const data = request.only([
        "id_campaign",
        "path_img",
        "nm_type",
        "active"
      ])

      campaignimage.merge(data);
      await campaignimage.save();
      return campaignimage;

    } catch (error) {
      return error
    }

  }

  /**
   * Delete a campaignimage with id.
   * DELETE campaignimages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const campaignimage = await CampaingImage.findOrFail(params.id);
      await campaignimage.delete();

    } catch (error) {
      return error
    }
  }
}

module.exports = CampaignImageController
