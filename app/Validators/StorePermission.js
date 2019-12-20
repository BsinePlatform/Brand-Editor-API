'use strict'

class StorePermission {
  get rules () {
    return {
      nm_role: "required|unique:permissions"
    }
  }
}

module.exports = StorePermission
