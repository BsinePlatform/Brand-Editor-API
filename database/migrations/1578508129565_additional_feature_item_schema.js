'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdditionalFeatureItemSchema extends Schema {
  up () {
    this.create('additional_feature_items', (table) => {
      table.increments()
      table
        .integer('id_order_item')
        .unsigned()
        .references('id')
        .inTable('order_items')
        table
        .integer('id_additional_feature')
        .unsigned()
        .references('id')
        .inTable('additional_features')        
      table.timestamps()
    })
  }

  down () {
    this.drop('additional_feature_items')
  }
}

module.exports = AdditionalFeatureItemSchema
