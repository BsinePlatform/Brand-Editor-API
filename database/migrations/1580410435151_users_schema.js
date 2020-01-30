'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('users', (table) => {
      table.dropColumn('id_user_creator')
      table.dropColumn('nr_role')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersSchema
