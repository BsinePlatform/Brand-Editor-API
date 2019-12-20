'use strict'

class UpdatePermission {
  get rules () {
    return {
      nm_role: "required|unique:permissions"
    }
  }
}

module.exports = UpdatePermission
