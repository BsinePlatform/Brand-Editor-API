'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubCategoriesSchema extends Schema {
  up () {
    this.table('sub_categories', (table) => {
      table
        .integer('id_category')
        .unsigned()
        .references('id')
        .inTable('categories')
    })
  }

  down () {
    this.table('sub_categories', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SubCategoriesSchema
