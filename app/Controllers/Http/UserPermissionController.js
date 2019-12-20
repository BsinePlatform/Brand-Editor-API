'use strict'

const UserPermission = use("App/Models/UserPermission");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with userpermissions
 */
class UserPermissionController {
  /**
   * Show a list of all userpermissions.
   * GET userpermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const user_permissions = await UserPermission.all();
    return user_permissions;
  }

  /**
   * Render a form to be used for creating a new userpermission.
   * GET userpermissions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new userpermission.
   * POST userpermissions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "id_permission",
      "id_user",
      "active"
    ]);

    const user_permissions = await UserPermission.create(data);
    return user_permissions;
  }

  /**
   * Display a single userpermission.
   * GET userpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const user_permissions = await UserPermission.findOrFail(params.id);
    await user_permissions.load('users')
    await user_permissions.load('permissions')
    return user_permissions;
  }

  /**
   * Render a form to update an existing userpermission.
   * GET userpermissions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update userpermission details.
   * PUT or PATCH userpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const user_permissions = await UserPermission.findOrFail(params.id);
    const data = request.only([
      "id_permission",
      "id_user",
      "active"
    ])

    user_permissions.merge(data);
    await user_permissions.save();
    return user_permissions;
  }

  /**
   * Delete a userpermission with id.
   * DELETE userpermissions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const user_permissions = await UserPermission.findOrFail(params.id);
    await user_permissions.delete();
  }


}

module.exports = UserPermissionController
