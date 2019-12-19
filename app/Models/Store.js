'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Store extends Model {

  users () {
    // model_reference, this_column(on company), reference_column(column on model_reference) 
    return this.belongsTo('App/Models/User', 'id_user_creator', 'id')
  }

  company () {
    return this.belongsTo('App/Models/Company', 'id_company', 'id')
  }

  products () {
      return this.hasMany('App/Models/Product')
  }

  departments () {
    return this.hasMany('App/Models/Department')
  }
    
  store_customization () {
    return this.hasOne('App/Models/CompaniesCustomization', 'id_store_customization', 'id')
  }

  product_permission () {
    return this.hasMany('App/Models/ProductPermission', 'id_store', 'id')
  }

}

module.exports = Store
