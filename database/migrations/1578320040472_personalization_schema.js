'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalizationSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('personalizations', (table) => {
      table.dropColumn('id_product')
    })
  }

  down () {
    this.table('personalizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PersonalizationSchema
