'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionsSchema extends Schema {
  up () {
    this.table('permissions', (table) => {
      table.string('nm_role')
    })
  }

  down () {
    this.table('permissions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PermissionsSchema
