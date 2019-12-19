'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personalization extends Model {
    products() {
        return this.belongsTo('App/Models/Product', 'id_product', 'id')
    }
}

module.exports = Personalization
