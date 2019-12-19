'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductPermission extends Model {
    products () {
        return this.belongsTo('App/Models/Product', 'id_product', 'id')
    }

    stores () {
        return this.belongsTo('App/Models/Store', 'id_store', 'id')
    }
}

module.exports = ProductPermission
