'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPermissionsSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    this.table('user_permissions', (table) => {
      table.dropColumn('id_permission')
      table.dropColumn('id_user')
    })
  }

  down () {
    this.table('user_permissions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserPermissionsSchema
