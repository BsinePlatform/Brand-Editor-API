'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
    order () {
        return this.belongsTo('App/Models/Order', 'id_order', 'id')
    }

    product (){
        return this.belongsTo('App/Models/Product', 'id_product', 'id')
    }
}

module.exports = OrderItem
