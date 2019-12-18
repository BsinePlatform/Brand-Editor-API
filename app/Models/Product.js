'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    
    subcategory () {
        return this.belongsTo('App/Models/SubCategory', 'id_subcategory', 'id')
    }

    users () {
        return this.belongsTo('App/Models/User', 'id_user_creator', 'id')
    }

    images() {
        return this.hasMany('App/Models/Image',  'id', 'id_product')
    }

    prices() {
        return this.hasMany('App/Models/Price', 'id', 'id_product')
    }
}

module.exports = Product
