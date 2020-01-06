'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up () {
    this.table('stores', (table) => {
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('id_store_customization')
        .unsigned()
        .references('id_company_customization')
        .inTable('companies')
    })
  }

  down () {
    this.table('stores', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StoresSchema
