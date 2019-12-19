'use strict'

class UpdateUser {
  get rules () {
    return {
      nm_username: 'required',
      nm_email: 'required|email|unique:users',
      nm_password: 'required',
      nr_document: 'required|min:9'
    }
  }
}

module.exports = UpdateUser
