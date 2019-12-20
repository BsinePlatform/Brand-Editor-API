'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Permission extends Model {
    user_permissions(){
        return this.hasMany('App/Models/UserPermission')
    }
}

module.exports = Permission
