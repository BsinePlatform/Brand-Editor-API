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
      table
        .integer('id_payment_form')
        .unsigned()
        .references('id')
        .inTable('payment_forms')
    })
  }

  down () {
    this.table('orders', (table) => {
      // reverse alternations
    })
  }
}

module.exports = OrdersSchema
