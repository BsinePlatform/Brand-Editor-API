'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    
    subcategory () {
        return this.belongsTo('App/Models/SubCategory')
    }

    users () {
        return this.hasOne('App/Models/User')
    }

    images() {
        return this.hasMany('App/Models/Image')
    }

    prices() {
        return this.hasMany('App/Models/Price')
    }
}

module.exports = Product
