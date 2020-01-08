'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GalleryPermission extends Model {
    gallery(){
        return this.belongsTo('App/Models/Gallery', 'id_gallery', 'id')
    }

    user(){
        return this.belongsTo('App/Models/User', 'id_user', 'id')
    }

    department(){
        return this.belongsTo('App/Models/Department', 'id_department', 'id')
    }

    store(){
        return this.belongsTo('App/Models/Store', 'id_store', 'id')
    }

    company(){
        return this.belongsTo('App/Models/Company', 'id_company', 'id')
    }
}

module.exports = GalleryPermission
