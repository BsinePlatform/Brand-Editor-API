'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.table('images', (table) => {
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
    })
  }

  down () {
    this.table('images', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ImagesSchema
