'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdditionalFeature extends Model {
    feature(){
        return this.belongsTo('App/Models/Feature', 'id_feature', 'id')
    }
}

module.exports = AdditionalFeature
