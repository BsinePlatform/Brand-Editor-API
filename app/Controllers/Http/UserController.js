'use strict'

const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const users = await User.all();
  
      return users;
      
    } catch (error) {
      return error;
    }
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
    try {
      const data = request.only([
        "nm_username",
        "nm_email",
        "nm_password",
        "nm_full_name",
        "nr_document",
        "nm_sex",
        "dt_born",
        "nm_department",
        "nm_position",
        "nr_ddi_phone_commercial",
        "nr_ddd_phone_commercial",
        "nr_phone_commercial",
        "nr_phone_commercial_extension",
        "nr_ddi",
        "nr_ddd",
        "nr_phone",
        "nr_ddi_01",
        "nr_ddd_01",
        "nr_phone_01",
        "nr_ddi_02",
        "nr_ddd_02",
        "nr_phone_02",
        "nr_ddi_cellphone",
        "nr_ddd_cellphone",
        "nr_cellphone",
        "nm_skype",
        "nm_facebook",
        "nr_whatsapp",
        "nm_linkedin",
        "nm_twitter",
        "nm_site",
        "path_img_profile",
        "id_user_creator",
        "id_store",
        "id_department",
        "nr_role",
        "active"
      ]);
  
      const user = await User.create(data);
  
      return user;
      
    } catch (error) {
      return error
    }
    
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const user = await User.findOrFail(params.id)
  
      await user.load('stores')
      await user.load('departments')
      await user.load('user_creator')
  
      return user
      
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    try {
      const user = await User.findOrFail(params.id);
      const data = request.only([
        "nm_username",
        "nm_email",
        "nm_password",
        "nm_full_name",
        "nr_document",
        "nm_sex",
        "dt_born",
        "nm_department",
        "nm_position",
        "nr_ddi_phone_commercial",
        "nr_ddd_phone_commercial",
        "nr_phone_commercial",
        "nr_phone_commercial_extension",
        "nr_ddi",
        "nr_ddd",
        "nr_phone",
        "nr_ddi_01",
        "nr_ddd_01",
        "nr_phone_01",
        "nr_ddi_02",
        "nr_ddd_02",
        "nr_phone_02",
        "nr_ddi_cellphone",
        "nr_ddd_cellphone",
        "nr_cellphone",
        "nm_skype",
        "nm_facebook",
        "nr_whatsapp",
        "nm_linkedin",
        "nm_twitter",
        "nm_site",
        "path_img_profile",
        "id_user_creator",
        "id_store",
        "nr_role",
        "active"
      ]);
  
      user.merge(data);
      await user.save();
  
      return user;
      
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    try {
      const user = await User.findOrFail(params.id);
  
      await user.delete();
      
    } catch (error) {
      return error
    }

  }

}

module.exports = UserController
