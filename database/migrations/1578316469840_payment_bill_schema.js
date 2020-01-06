'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentBillSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('payment_bills', (table) => {
      table.dropColumn('id_order')
    })
  }

  down () {
    this.table('payment_bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PaymentBillSchema
