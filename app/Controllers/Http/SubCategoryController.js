'use strict'

const SubCategory = use('App/Models/SubCategory')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subcategories
 */
class SubCategoryController {
  /**
   * Show a list of all subcategories.
   * GET subcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const subcategories = SubCategory.all()
  
      return subcategories
      
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to be used for creating a new subcategory.
   * GET subcategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new subcategory.
   * POST subcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.only([
        "id_category",
        "nm_subcategory",
        "nm_description",
        "nm_keyword",
        "active"
      ])
  
      const subcategory = await SubCategory.create(data)
  
      return subcategory
      
    } catch (error) {
      return error
    }
  }

  /**
   * Display a single subcategory.
   * GET subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const subcategory = await SubCategory.findOrFail(params.id)
  
      await subcategory.load('categories')
  
      return subcategory
      
    } catch (error) {
      return error
    }
  }

  /**
   * Render a form to update an existing subcategory.
   * GET subcategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update subcategory details.
   * PUT or PATCH subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const subcategory = await SubCategory.findOrFail(params.id)
      const data = request.only([
        "id_category",
        "nm_subcategory",
        "nm_description",
        "nm_keyword",
        "active"
      ])
  
      subcategory.merge(data)
      await subcategory.save()
  
      return subcategory
      
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a subcategory with id.
   * DELETE subcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const subcategory = await SubCategory.findOrFail(params.id)
  
      await subcategory.delete()
      
    } catch (error) {
      return error
    }
  }
}

module.exports = SubCategoryController
