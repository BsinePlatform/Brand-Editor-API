'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FilePermissionSchema extends Schema {
  up () {
    this.create('file_permissions', (table) => {
      table.increments()
      table
        .integer('id_file')
        .unsigned()
        .references('id')
        .inTable('file_galleries')
      table
        .integer('id_user')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('id_department')
        .unsigned()
        .references('id')
        .inTable('departments')
      table
        .integer('id_store')
        .unsigned()
        .references('id')
        .inTable('stores')
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
      table.timestamps()
    })
  }

  down () {
    this.drop('file_permissions')
  }
}

module.exports = FilePermissionSchema
