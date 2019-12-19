'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductPermissionSchema extends Schema {
  up () {
    this.create('product_permissions', (table) => {
      table.increments()
      table
        .integer('id_product')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('id_store')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nm_state')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_permissions')
  }
}

module.exports = ProductPermissionSchema
