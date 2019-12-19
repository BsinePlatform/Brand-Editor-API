'use strict'

class StoreUser {
  get rules () {
    return {
      nm_username: 'required',
      nm_email: 'required|email|unique:users',
      nm_password: 'required',
      nr_document: 'required|min:9'
    }
  }
}

module.exports = StoreUser
