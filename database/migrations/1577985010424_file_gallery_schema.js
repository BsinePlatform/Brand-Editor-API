'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileGallerySchema extends Schema {
  up () {
    this.create('file_galleries', (table) => {
      table.increments()
      table
        .integer('id_gallery')
        .unsigned()
        .references('id')
        .inTable('galleries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('id_user_upload')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path_file')
      table.timestamps()
    })
  }

  down () {
    this.drop('file_galleries')
  }
}

module.exports = FileGallerySchema
