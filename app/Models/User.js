'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.nm_password) {
        userInstance.nm_password = await Hash.make(userInstance.nm_password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  /*companies () {
    // model_reference, this_column(on user), reference_column(column on model_reference) 
    return this.belongsTo('App/Models/Company', 'id_company', 'id')
  }*/

  stores () {
    return this.belongsTo('App/Models/Store', 'id_store', 'id')
  }
  
  departments () {
    return this.belongsTo('App/Models/Department', 'id_department', 'id')
  }

  user_creator() {
    return this.hasOne('App/Models/User', 'id_user_creator','id')
  }

  /*
  userPermissions () {
    return this.hasMany('App/Models/UserPermission', 'id_user', 'id')
  }*/
  

}

module.exports = User
