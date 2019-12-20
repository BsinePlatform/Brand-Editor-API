'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Campaign extends Model {
    company(){
        return this.belongsTo('App/Models/Company', 'id_company', 'id');
    }

    user(){
        return this.belongsTo('App/Models/User', 'id_user_creator', 'id');
    }

    campaignImage(){
        return this.hasMany('App/Models/CampaignImage')
    }
}

module.exports = Campaign
