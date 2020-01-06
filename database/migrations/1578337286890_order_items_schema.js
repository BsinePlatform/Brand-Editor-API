'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemsSchema extends Schema {
  up () {
    this.create('order_items', (table) => {
      table.increments()
      table.integer('nr_qty')
      table.float('nr_price', 7, 2)
      table.float('nr_total', 7, 2)
      table
        .integer('id_order')
        .unsigned()
        .references('id')
        .inTable('orders')
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemsSchema
