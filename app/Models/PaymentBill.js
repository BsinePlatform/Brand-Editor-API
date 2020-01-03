'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PaymentBill extends Model {
    orders () {
        return this.belongsTo('App/Models/Order', 'id_order', 'id')
    }
}

module.exports = PaymentBill
