'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileGallerySchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('file_galleries', (table) => {
      table.dropColumn('id_gallery')
      table.dropColumn('id_user_upload')
    })
  }

  down () {
    this.table('file_galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = FileGallerySchema
