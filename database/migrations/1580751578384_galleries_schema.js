'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this.table('galleries', (table) => {
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
    })
  }

  down () {
    this.table('galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = GalleriesSchema
