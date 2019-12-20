'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignSchema extends Schema {
  up () {
    this.create('campaigns', (table) => {
      table.increments()
      table.integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_campaign')
      table.string('nm_description')
      table.string('path_img')
      table.datetime('dt_ini')
      table.datetime('dt_end')
      table.boolean('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('campaigns')
  }
}

module.exports = CampaignSchema
