'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('galleries', (table) => {
      table.dropColumn('id_user_creator')      
    })
  }

  down () {
    this.table('galleries', (table) => {
      // reverse alternations
    })
  }
}

module.exports = GalleriesSchema
