'use strict'

class UpdateDepartment {
  get rules () {
    return {
      nm_department: "required"
    }
  }
}

module.exports = UpdateDepartment
