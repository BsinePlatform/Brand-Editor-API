'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesCustomizationsSchema extends Schema {
  up () {
    this.table('companies_customizations', (table) => {
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('companies_customizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesCustomizationsSchema
