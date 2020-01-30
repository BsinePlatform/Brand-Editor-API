'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoresSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('stores', (table) => {
      table.dropColumn('path_bucket')
      table.string('bucket_name')
    })
  }

  down () {
    this.table('stores', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StoresSchema
