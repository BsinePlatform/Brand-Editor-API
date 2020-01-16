'use strict'

const Campaign = use('App/Models/Campaign');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with campaigns
 */
class CampaignController {
  /**
   * Show a list of all campaigns.
   * GET campaigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const campaign = await Campaign.all();
      return campaign;

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new campaign.
   * GET campaigns/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new campaign.
   * POST campaigns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "id_company",
        "id_user_creator",
        "nm_campaign",
        "nm_description",
        "path_img",
        "dt_ini",
        "dt_end",
        "active"
      ])

      const existCampaign = await Campaign
                            .query()
                            .where('id_company', '=', data['id_company'])
                            .where('nm_campaign', '=', data['nm_campaign'])
                            .getCount()

      if(existCampaign == 0) {
        const campaign = await Campaign.create(data);
        return campaign;
      } else {
        return response.json({error: "Esse registro já está na base de dados!"});
      }      

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single campaign.
   * GET campaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const campaign = await Campaign.findOrFail(params.id);
      await campaign.load('company')
      await campaign.load('user')
      return campaign;

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing campaign.
   * GET campaigns/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update campaign details.
   * PUT or PATCH campaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const campaign = await Campaign.findOrFail(params.id);
      const data = request.only([
        "id_company",
        "id_user_creator",
        "nm_campaign",
        "nm_description",
        "path_img",
        "dt_ini",
        "dt_end",
        "active"
      ]);

      campaign.merge(data);
      await campaign.save();
      return campaign;

    } catch (error) {
      return error
    }

  }

  /**
   * Delete a campaign with id.
   * DELETE campaigns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const campaign = await Campaign.findOrFail(params.id)
      await campaign.delete()

    } catch (error) {
      return error
    }
  }
}

module.exports = CampaignController
