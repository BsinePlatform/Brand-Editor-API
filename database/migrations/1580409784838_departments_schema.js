'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartmentsSchema extends Schema {
  up () {
    this.table('departments', (table) => {
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
      table
        .integer('id_store')
        .unsigned()
        .references('id')
        .inTable('stores')
    })
  }

  down () {
    this.table('departments', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DepartmentsSchema
