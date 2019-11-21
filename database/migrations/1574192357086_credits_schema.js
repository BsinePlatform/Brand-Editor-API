'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditsSchema extends Schema {
  up () {
    this.create('credits', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('credits')
  }
}

module.exports = CreditsSchema
