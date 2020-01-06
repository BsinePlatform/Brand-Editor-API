'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignImageSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('campaign_images', (table) => {
      table.dropColumn('id_campaign')
    })
  }

  down () {
    this.table('campaign_images', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CampaignImageSchema
