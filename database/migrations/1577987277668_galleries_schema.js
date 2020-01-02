'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this.table('galleries', (table) => {
      table.integer('id_user_creator')
      table.string('nm_gallery')
    })
  }

  down () {
    this.table('galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = GalleriesSchema
