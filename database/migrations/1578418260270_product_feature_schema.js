'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductFeatureSchema extends Schema {
  up () {
    this.create('product_features', (table) => {
      table.increments()
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
      table
        .integer('id_feature')
        .unsigned()
        .references('id')
        .inTable('features')

      table.timestamps()
    })
  }

  down () {
    this.drop('product_features')
  }
}

module.exports = ProductFeatureSchema
