'use strict'

class UpdateStore {
  get rules () {
    return {
      nm_corporate_name: "required",
      nr_cnpj: "required",
      id_company: "required",
      id_user_creator: "required"
    }
  }
}

module.exports = UpdateStore
