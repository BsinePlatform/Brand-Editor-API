'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this.table('galleries', (table) => {
      table.string('path_s3')
    })
  }

  down () {
    this.table('galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = GalleriesSchema
