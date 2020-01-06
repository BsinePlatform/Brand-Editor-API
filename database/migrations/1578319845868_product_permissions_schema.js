'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductPermissionsSchema extends Schema {
  up () {
    this.table('product_permissions', (table) => {
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
      table
        .integer('id_store')
        .unsigned()
        .references('id')
        .inTable('stores')
    })
  }

  down () {
    this.table('product_permissions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductPermissionsSchema
