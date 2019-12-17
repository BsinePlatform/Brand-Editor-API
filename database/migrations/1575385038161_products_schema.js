'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.string('nm_name')
      table.string('nm_title')
      table.integer('nr_width')
      table.integer('nr_height')
      table.integer('nr_deph')
      table.string('sc_width')
      table.string('sc_height')
      table.string('sc_deph')
      table.string('sc_size')
      table.string('nm_finishing')
      table.string('nm_paper')
      table.string('nm_material')
      table.string('tx_description')
      table.string('tx_note')
      table.string('path_img_01')
      table.string('path_img_02')
      table.string('path_img_03')
      table.string('path_img_04')
      table.string('path_img_05')
      table
        .integer('id_type')
        .unsigned()
        .references('id')
        .inTable('types')
      table
        .integer('id_category')
        .unsigned()
        .references('id')
        .inTable('categories')
      table
        .integer('id_user_creator')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .integer('id_company')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .smallint('id_role_order')
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
      table
        .smallint('id_role_view')
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
      table
        .smallint('id_role_edit')
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
      table
        .smallint('id_role_create')
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
      table
        .smallint('id_role_delete')
        .integer('nr_role')
        .unsigned()
        .references('id')
        .inTable('roles')
      table.boolean('active').notNullable().defaultTo(1)
    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductsSchema
