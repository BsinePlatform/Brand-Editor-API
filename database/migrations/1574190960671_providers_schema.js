'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvidersSchema extends Schema {
  up () {
    this.create('providers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('providers')
  }
}

module.exports = ProvidersSchema
