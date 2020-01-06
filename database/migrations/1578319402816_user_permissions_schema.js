'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPermissionsSchema extends Schema {
  up () {
    this.table('user_permissions', (table) => {
      table.integer('id_permission')
        .unsigned()
        .references('id')
        .inTable('permissions')
      table.integer('id_user')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('user_permissions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserPermissionsSchema
