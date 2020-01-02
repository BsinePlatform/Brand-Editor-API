'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentFormSchema extends Schema {
  up () {
    this.create('payment_forms', (table) => {
      table.increments()
      table.string('nm_form')
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_forms')
  }
}

module.exports = PaymentFormSchema
