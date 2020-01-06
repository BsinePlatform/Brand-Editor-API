'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductCampaignSchema extends Schema {
  up () {
    this.table('product_campaigns', (table) => {
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
      table.integer('id_campaign')
        .unsigned()
        .references('id')
        .inTable('campaigns')
    })
  }

  down () {
    this.table('product_campaigns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductCampaignSchema
