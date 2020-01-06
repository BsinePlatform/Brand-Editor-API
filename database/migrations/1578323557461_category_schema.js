'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.table('categories', (table) => {
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
    })
  }

  down () {
    this.table('categories', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CategorySchema
