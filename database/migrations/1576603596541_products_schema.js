'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table
        .integer('id_subcategory')
        .unsigned()
        .references('id')
        .inTable('sub_categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_product').notNullable()
      table.date('dt_ini')  
      table.date('dt_end')  
      table.integer('nr_production_period')
      table.boolean('nr_stock_control')
      table.boolean('nr_sold_out')
      table.boolean('nr_launch')
      table.boolean('nr_best_seller')
      table.boolean('nr_featured')
      table.boolean('active')
      table.string('nm_reduced_description')
      table.string('nm_full_description')
      table.boolean('nr_customizable')
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('nr_other_taxes')
      table.float('nr_initial_price', 9, 2)
      table.float('nr_initial_weight', 9, 2)
      table.float('nr_final_weight', 9, 2)
      table.string('nr_calculate_format')
      table.boolean('nr_buy_limit')
      table.string('sc_measurement')
      table.float('nr_unit_weight', 9, 2)
      table.float('nr_unit_width', 9, 2)
      table.float('nr_unit_length', 9, 2)
      table.float('nr_unit_height', 9, 2)
      table.boolean('nr_enable_unit_price')
      table.boolean('nr_enable_additional_value')
      table.boolean('nr_show_price')
      table.string('nm_keyword')

    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductsSchema
