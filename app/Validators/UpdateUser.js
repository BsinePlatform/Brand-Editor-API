'use strict'

class UpdateUser {
  get rules () {
    const id = this.ctx.params.id
    return {
      nm_username: 'required',
      nm_email: `required|email|unique:users,nm_email, id, ${id}`,
      nm_password: 'required',
      nr_document: 'required|min:9'
    }
  }
}

module.exports = UpdateUser
