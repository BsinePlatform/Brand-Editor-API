'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesCustomizationsSchema extends Schema {
  up () {
    this.create('companies_customizations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies_customizations')
  }
}

module.exports = CompaniesCustomizationsSchema
