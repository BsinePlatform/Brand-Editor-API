'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductFeatureSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('product_features', (table) => {
      table.dropColumn('id_feature')
    })
  }

  down () {
    this.table('product_features', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductFeatureSchema
