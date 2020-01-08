'use strict'

class StoreFilePermission {
  get rules () {
    return {
      id_file: "required"
    }
  }
}

module.exports = StoreFilePermission
