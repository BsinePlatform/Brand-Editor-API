'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gallery extends Model {
    users () {
        return this.belongsTo('App/Models/User', 'id_user_creator', 'id')
    }
}

module.exports = Gallery
