'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductCampaign extends Model {
    products () {
        return this.belongsTo('App/Models/Product', 'id_product', 'id')
    }

    campaigns () {
        return this.belongsTo('App/Models/Campaign', 'id_campaign', 'id')
    }
}

module.exports = ProductCampaign
