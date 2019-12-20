'use strict'

class UpdateUserPermission {
  get rules () {
    return {
      id_permission: "required",
      id_user: "required"
    }
  }
}

module.exports = UpdateUserPermission
