'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.table('orders', (table) => {
      // alter table
    })
  }

  down () {
    this.table('orders', (table) => {
      this.drop('orders')
    })
  }
}

module.exports = OrdersSchema
