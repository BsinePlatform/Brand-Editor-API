'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this.create('galleries', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('galleries')
  }
}

module.exports = GalleriesSchema
