'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up () {
    this.table('stores', (table) => {
      table.string('path_bucket')
    })
  }

  down () {
    this.table('stores', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StoreSchema
