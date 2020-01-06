'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this.table('prices', (table) => {
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
    })
  }

  down () {
    this.table('prices', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PriceSchema
