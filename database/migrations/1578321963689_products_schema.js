'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table
        .integer('id_subcategory')
        .unsigned()
        .references('id')
        .inTable('sub_categories')
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductsSchema
