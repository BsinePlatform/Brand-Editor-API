'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductPermissionsSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('product_permissions', (table) => {
      table.dropColumn('id_product')
      table.dropColumn('id_store')
    })
  }

  down () {
    this.table('product_permissions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductPermissionsSchema
