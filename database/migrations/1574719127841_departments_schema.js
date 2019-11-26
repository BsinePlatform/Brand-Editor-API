'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepartmentsSchema extends Schema {
  up () {
    this.table('departments', (table) => {
      table.string('nm_department', 80).notNullable()
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('id_store')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('departments', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DepartmentsSchema
