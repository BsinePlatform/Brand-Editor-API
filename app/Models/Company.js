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

    company_customization () {
        return this.hasOne('App/Models/CompaniesCustomization', 'id', 'id_company')
    }

    categories () {
        return this.hasMany('App/Models/Category', 'id', 'id_company')
    }

    campaign(){
        return this.hasMany('App/Models/Campaign', 'id', 'id_company')
    }

    galleries() {
        return this.hasMany('App/Models/Gallery', 'id', 'id_company')
    }

}

module.exports = Company
