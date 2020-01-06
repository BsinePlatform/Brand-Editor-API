'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignImageSchema extends Schema {
  up () {
    this.table('campaign_images', (table) => {
      table.integer('id_campaign')
        .unsigned()
        .references('id')
        .inTable('campaigns')
    })
  }

  down () {
    this.table('campaign_images', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CampaignImageSchema
