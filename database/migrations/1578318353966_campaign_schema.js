'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('campaigns', (table) => {
      table.dropColumn('id_company')
      table.dropColumn('id_user_creator')
    })
  }

  down () {
    this.table('campaigns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CampaignSchema
