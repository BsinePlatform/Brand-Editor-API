'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubCategorySchema extends Schema {
  up () {
    this.create('sub_categories', (table) => {
      table.increments()
      table
        .integer('id_category')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_subcategory').notNullable()      
      table.string('nm_description')
      table.string('nm_keyword')
      table.boolean('active').notNullable().defaultTo('1')
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_categories')
  }
}

module.exports = SubCategorySchema
