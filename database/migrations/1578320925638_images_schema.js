'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('images', (table) => {
      table.dropColumn('id_product')
    })
  }

  down () {
    this.table('images', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ImagesSchema
