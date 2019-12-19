'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalizationSchema extends Schema {
  up () {
    this.create('personalizations', (table) => {
      table.increments()
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_template_type')
      table.integer('nr_cod_item')
      table.boolean('nr_file_upload')
      table.boolean('nr_show_form')
      table.boolean('nr_buy_after_personalize')
      table.integer('nr_deadline')
      table.float('nr_credit_value_client', 7, 2)
      table.integer('nr_download_ok_deadline')
      table.integer('nr_qty_download')
      table.boolean('nr_content_approval')
      table.timestamps()
    })
  }

  down () {
    this.drop('personalizations')
  }
}

module.exports = PersonalizationSchema
