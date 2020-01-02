'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductCampaignSchema extends Schema {
  up () {
    this.create('product_campaigns', (table) => {
      table.increments()
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('id_campaign')
        .unsigned()
        .references('id')
        .inTable('campaigns')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_campaigns')
  }
}

module.exports = ProductCampaignSchema
