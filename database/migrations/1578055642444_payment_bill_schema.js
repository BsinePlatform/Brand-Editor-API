'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentBillSchema extends Schema {
  up () {
    this.create('payment_bills', (table) => {
      table.increments()
      table.string('nm_assignor')
      table.integer('nr_agency')
      table.string('nr_bill')
      table.string('nr_document')
      table.float('nr_bill_value', 7, 2)
      table.datetime('dt_end_payment_date')
      table.string('nr_our_number')
      table.string('nr_document_number')
      table
        .integer('id_order')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_bills')
  }
}

module.exports = PaymentBillSchema
