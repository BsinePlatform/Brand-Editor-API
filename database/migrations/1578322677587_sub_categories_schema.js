'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubCategoriesSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('sub_categories', (table) => {
      table.dropColumn('id_category')
    })
  }

  down () {
    this.table('sub_categories', (table) => {
      // reverse alternations
    })
  }
}

module.exports = SubCategoriesSchema
