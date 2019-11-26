'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesCustomizationSchema extends Schema {
  up () {
    this.table('companies_customizations', (table) => {
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('companies_customizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesCustomizationSchema
