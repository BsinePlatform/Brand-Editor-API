'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CompaniesCustomization extends Model {

    companies () {
        // model_reference, this_column(on user), reference_column(column on model_reference) 
        return this.belongsTo('App/Models/Company', 'id', 'id_company_customization')
    }

    users () {
        // model_reference, this_column(on company), reference_column(column on model_reference) 
        return this.hasOne('App/Models/User', 'id_user_creator', 'id')
    }
}

module.exports = CompaniesCustomization
