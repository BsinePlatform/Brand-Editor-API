'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentBillSchema extends Schema {
  up () {
    this.table('payment_bills', (table) => {
      table
        .integer('id_order')
        .unsigned()
        .references('id')
        .inTable('orders')
    })
  }

  down () {
    this.table('payment_bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PaymentBillSchema
