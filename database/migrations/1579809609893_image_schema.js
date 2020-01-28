'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.table('images', (table) => {
      table.string('bucket_name').after('path_img')
    })
  }

  down () {
    this.table('images', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ImageSchema
