'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema
