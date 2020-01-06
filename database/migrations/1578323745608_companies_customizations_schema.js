'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesCustomizationsSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('companies_customizations', (table) => {
      table.dropColumn('id_user_creator')
      table.dropColumn('id_company')
    })
  }

  down () {
    this.table('companies_customizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesCustomizationsSchema
