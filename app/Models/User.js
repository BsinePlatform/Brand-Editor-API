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

  companies () {
    return this.hasMany('App/Models/Company')
  }

  stores () {
    return this.hasMany('App/Models/Store')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }

  userPermissions () {
    return this.hasMany('App/Models/UserPermission')
  }

  reports () {
    return this.hasMany('App/Models/Report')
  }

}

module.exports = User
