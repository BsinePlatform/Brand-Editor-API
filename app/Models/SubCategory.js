'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubCategory extends Model {

    category () {
        return this.belongsTo('App/Models/Category', 'id_category', 'id')
    }
}

module.exports = SubCategory
