'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentBillSchema extends Schema {
  up () {
    this.table('payment_bills', (table) => {
      table.integer('nr_bin').after('nr_bill_value')
    })
  }

  down () {
    this.table('payment_bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PaymentBillSchema
