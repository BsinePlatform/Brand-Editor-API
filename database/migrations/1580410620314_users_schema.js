'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersSchema
