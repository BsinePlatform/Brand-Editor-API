'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductFeatureSchema extends Schema {
  up () {
    this.table('product_features', (table) => {
      table
        .integer('id_feature')
        .unsigned()
        .references('id')
        .inTable('additional_features')
    })
  }

  down () {
    this.table('product_features', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductFeatureSchema
