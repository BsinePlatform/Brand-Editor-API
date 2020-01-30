'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesSchema extends Schema {
  up () {
    this.table('companies', (table) => {
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('companies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesSchema
