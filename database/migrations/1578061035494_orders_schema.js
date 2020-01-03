'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      table
        .integer('id_user')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.float('nr_total_price', 7, 2)
      table.datetime('dt_date_order')
      table
        .integer('id_payment_form')
        .unsigned()
        .references('id')
        .inTable('payment_forms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_status')
      table.float('nr_postage_value', 7, 2)
    })
  }

  down () {
    this.table('orders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = OrdersSchema
