'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FileGallery extends Model {
    gallery () {
        return this.belongsTo('App/Models/Gallery', 'id_gallery', 'id')
    }

    user_upload () {
        return this.belongsTo('App/Models/User', 'id_user_upload', 'id')
    }
}

module.exports = FileGallery
