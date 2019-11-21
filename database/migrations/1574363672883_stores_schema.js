'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up () {
    this.table('stores', (table) => {
      table
        .integer('id_store_customization')
        .unsigned()
        .references('id_company_customization')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('stores', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StoresSchema
