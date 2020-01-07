'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductFeature extends Model {
    product(){
        return this.belongsTo('App/Models/Product', 'id_product', 'id')
    }

    feature(){
        return this.belongsTo('App/Models/AdditionalFeature', 'id_feature', 'id')
    }
}

module.exports = ProductFeature
