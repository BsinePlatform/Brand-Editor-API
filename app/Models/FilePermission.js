'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FilePermission extends Model {
    file(){
        return this.belongsTo('App/Models/FileGallery', 'id_file', 'id')
    }

    user(){
        return this.hasMany('App/Models/User', 'id_user', 'id')
    }

    department(){
        return this.hasMany('App/Models/Department', 'id_department', 'id')
    }

    store(){
        return this.hasMany('App/Models/Store', 'id_store', 'id')
    }

    company(){
        return this.belongsTo('App/Models/Company', 'id_company', 'id')
    }
}

module.exports = FilePermission
