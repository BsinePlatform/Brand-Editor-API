'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('prices', (table) => {
      table.dropColumn('id_product')
    })
  }

  down () {
    this.table('prices', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PriceSchema
