'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartmentsSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('departments', (table) => {
      table.dropColumn('id_company')
      table.dropColumn('id_store')   
    })
  }

  down () {
    this.table('departments', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DepartmentsSchema
