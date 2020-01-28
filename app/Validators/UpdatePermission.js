'use strict'

class UpdatePermission {
  get rules () {
    const id = this.ctx.params.id
    return {
      nm_role: `required|unique:permissions,nm_role,id, ${id}`
    }
  }
}

module.exports = UpdatePermission
