'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
    users () {
        return this.belongsTo('App/Models/User', 'id_user', 'id')
    }

    payment_forms (){
        return this.hasOne('App/Models/PaymentForm', 'id_payment_form', 'id')
    }
}

module.exports = Order
