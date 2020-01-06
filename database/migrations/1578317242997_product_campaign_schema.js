'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductCampaignSchema extends Schema {
  up () {
    this
    .raw("SET sql_mode='TRADITIONAL'")
    .table('product_campaigns', (table) => {
      table.dropColumn('id_product')
      table.dropColumn('id_campaign')
    })
  }

  down () {
    this.table('product_campaigns', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductCampaignSchema
