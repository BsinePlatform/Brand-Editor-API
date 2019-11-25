'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Company extends Model {
    
    users () {
        // model_reference, this_column(on company), reference_column(column on model_reference) 
        return this.hasOne('App/Models/User', 'id_user_creator', 'id')
    }

    stores () {
        return this.hasMany('App/Models/Store', 'id', 'id_company')
    }

    companiesCustomizations () {
        return this.hasOne('App/Models/CompaniesCustomization')
    }

}

module.exports = Company
