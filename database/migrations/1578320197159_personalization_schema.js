'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalizationSchema extends Schema {
  up () {
    this.table('personalizations', (table) => {
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
    })
  }

  down () {
    this.table('personalizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PersonalizationSchema
