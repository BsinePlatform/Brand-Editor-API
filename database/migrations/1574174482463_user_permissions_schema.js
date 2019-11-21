'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPermissionsSchema extends Schema {
  up () {
    this.create('user_permissions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_permissions')
  }
}

module.exports = UserPermissionsSchema
