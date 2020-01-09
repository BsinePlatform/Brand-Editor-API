'use strict'

class StoreDepartment {
  get rules () {
    return {
      nm_department: "required"
    }
  }
}

module.exports = StoreDepartment
