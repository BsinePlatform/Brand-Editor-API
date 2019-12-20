'use strict'

class StoreUserPermission {
  get rules () {
    return {
      id_permission: "required",
      id_user: "required"
    }
  }
}

module.exports = StoreUserPermission
