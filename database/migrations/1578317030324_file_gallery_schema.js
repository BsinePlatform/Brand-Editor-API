'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileGallerySchema extends Schema {
  up () {
    this.table('file_galleries', (table) => {
      table
        .integer('id_gallery')
        .unsigned()
        .references('id')
        .inTable('galleries')
      table
        .integer('id_user_upload')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('file_galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = FileGallerySchema
