'use strict'

const Department = use("App/Models/Department");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with departments
 */
class DepartmentController {
  /**
   * Show a list of all departments.
   * GET departments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const departments = await Department.all()

      return departments

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new department.
   * GET departments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new department.
   * POST departments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        "nm_department",
        "id_company",
        "id_store"
      ])

      const department = await Department.create(data)

      return department

    } catch (error) {
      return error
    }
  }

  /**
   * Display a single department.
   * GET departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const department = await Department.findOrFail(params.id)

      await department.load('stores')
      await department.load('companies')
      await department.load('users')

      return department

    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing department.
   * GET departments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update department details.
   * PUT or PATCH departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {

    try {
      const department = await Department.findOrFail(params.id)
      const data = request.only([
        "nm_department",
        "id_company",
        "id_store"
      ])

      department.merge(data)
      await department.save()

      return department

    } catch (error) {
      return error
    }
  }

  /**
   * Delete a department with id.
   * DELETE departments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {

    try {
      const department = await Department.findOrFail(params.id)

      await department.delete()

    } catch (error) {
      return error
    }
  }

}

module.exports = DepartmentController
