'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdditionalFeatureSchema extends Schema {
  up () {
    this.create('additional_features', (table) => {
      table.increments()
      table
        .integer('id_feature')
        .unsigned()
        .references('id')
        .inTable('features')
      table.string('nm_additional_feature')
      table.float('nr_additional_value', 7, 2)
      table.float('nr_additional_weight', 7, 2)
      table.string('path_img_feature')
      table.boolean('active')
      table.integer('id_calculation_factor')
      table.float('nr_additional_height', 7, 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('additional_features')
  }
}

module.exports = AdditionalFeatureSchema
