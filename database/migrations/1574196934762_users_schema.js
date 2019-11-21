'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.dropColumn('username')
      table.dropColumn('email')
      table.dropColumn('password')
      table.string('nm_username', 40).notNullable().unique()
      table.string('nm_email', 254).notNullable().unique()
      table.string('nm_password', 60).notNullable()
      table.string('nm_full_name', 80).notNullable()
      table.bigint('nr_document').notNullable()
      table.string('nm_sex', 20).notNullable()
      table.date('dt_born').notNullable()
      table.string('nm_department').notNullable()
      table.string('nm_position').notNullable()
      table.smallint('nr_ddi_phone_commercial', 3).notNullable()
      table.smallint('nr_ddd_phone_commercial', 2).notNullable()
      table.bigint('nr_phone_commercial').notNullable()
      table.bigint('nr_phone_commercial_extension')
      table.smallint('nr_ddi', 3)
      table.smallint('nr_ddd', 2)
      table.bigint('nr_phone')
      table.smallint('nr_ddi_01', 3)
      table.smallint('nr_ddd_01', 2)
      table.bigint('nr_phone_01')
      table.smallint('nr_ddi_02', 3)
      table.smallint('nr_ddd_02', 2)
      table.bigint('nr_phone_02')
      table.smallint('nr_ddi_cellphone', 3)
      table.smallint('nr_ddd_cellphone', 2)
      table.bigint('nr_cellphone')
      table.string('nm_skype')
      table.string('nm_facebook')
      table.bigint('nr_whatsapp')
      table.string('nm_linkedin')
      table.string('nm_twitter')
      table.string('nm_site')
      table.string('path_img_profile')
      table.integer('id_user_creator').notNullable()/*.references('id').inTable('users')*/.defaultTo('0')
      table.integer('id_company').notNullable()/*.references('id').inTable('companies')*/.defaultTo('0')
      table.integer('nr_role', 2).notNullable()/*.references('id').inTable('roles')*/.defaultTo('0')
      table.boolean('active').notNullable().defaultTo('0')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersSchema
