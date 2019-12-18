'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PriceSchema extends Schema {
  up () {
    this.create('prices', (table) => {
      table.increments()
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('nr_qty_min')
      table.integer('nr_qty_max')
      table.float('nr_price_unit', 7, 2)
      table.float('nr_price_promo', 7, 2)
      table.boolean('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('prices')
  }
}

module.exports = PriceSchema
