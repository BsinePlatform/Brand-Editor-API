'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    company () {
        return this.belongsTo('App/Models/Company', 'id_company', 'id')
      }
}

module.exports = Category
