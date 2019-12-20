'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserPermission extends Model {
    permissions(){
        return this.hasMany('App/Models/Permission', 'id_permission', 'id')
    }

    users(){
        return this.belongsTo('App/Models/User', 'id_user', 'id')
    }
}

module.exports = UserPermission
