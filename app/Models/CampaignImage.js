'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CampaignImage extends Model {
    campaign(){
        return this.belongsTo('App/Models/Campaign', 'id_campaign', 'id')
    }
}

module.exports = CampaignImage
