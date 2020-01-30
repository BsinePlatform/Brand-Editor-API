'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('companies', (table) => {
      table.dropColumn('id_user_creator')      
    })
  }

  down () {
    this.table('companies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesSchema
