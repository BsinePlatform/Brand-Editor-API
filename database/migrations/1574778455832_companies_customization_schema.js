'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompaniesCustomizationSchema extends Schema {
  up () {
    this.table('companies_customizations', (table) => {
      table.string('path_img_logo').notNullable()
      table.string('path_img_brand')
      table.string('path_img_background')
      table.string('nm_color_background')
      table.string('path_img_main_banner')
      table.string('path_img_second_banner')
      table.smallint('nr_style_header')
      table.smallint('nr_style_menu')
      table.smallint('nr_style_footer')
      table.string('nm_color_header')
      table.string('nm_color_menu')
      table.string('nm_color_footer')
      table.string('nm_slogan')
      table.string('nm_main_phrase')
      table.string('nm_second_phrase')
      table.string('nm_color_main')
      table.string('nm_color_second')
      table.string('nm_color_third')
      table.string('nm_font_main')
      table.string('nm_font_second')
      table.string('nm_font_third')
      table.string('nm_font_size_main')
      table.string('nm_font_size_second')
      table.string('nm_font_size_third')
    })
  }

  down () {
    this.table('companies_customizations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = CompaniesCustomizationSchema
