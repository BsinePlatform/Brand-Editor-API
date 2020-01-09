'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdditionalFeatureItem extends Model {
    orderItem(){
        return this.belongsTo('App/Models/OrderItem', 'id_order_item', 'id');
    }

    additionalFeature(){
        return this.belongsTo('App/Models/AdditionalFeature', 'id_additional_feature', 'id');
    }
}

module.exports = AdditionalFeatureItem
