'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Department extends Model {

    stores () {
        return this.hasMany('App/Models/Store', 'id_store', 'id')
    }

    companies () {
        return this.hasMany('App/Models/Company', 'id_company', 'id')
    }

    users () {
        return this.hasMany('App/Models/User', 'id', 'id_department')
    }

}

module.exports = Department
