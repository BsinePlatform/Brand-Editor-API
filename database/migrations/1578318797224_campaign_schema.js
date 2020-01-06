'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignSchema extends Schema {
  up () {
    this.table('campaigns', (table) => {
      table.integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
      table.integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
    })
  }

  down () {
    this.table('campaigns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CampaignSchema
