'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignImageSchema extends Schema {
  up () {
    this.create('campaign_images', (table) => {
      table.increments()
      table.integer('id_campaign')
        .unsigned()
        .references('id')
        .inTable('campaigns')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path_img')
      table.string('nm_type')
      table.boolean('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('campaign_images')
  }
}

module.exports = CampaignImageSchema
