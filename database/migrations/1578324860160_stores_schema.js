'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('stores', (table) => {
      table.dropColumn('id_company')
      table.dropColumn('id_user_creator')
      table.dropColumn('id_store_customization')
    })
  }

  down () {
    this.table('stores', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StoresSchema
