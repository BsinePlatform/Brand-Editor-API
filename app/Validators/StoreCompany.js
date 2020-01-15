'use strict'

class StoreCompany {
  get rules () {
    return {
      nm_corporate_name: "required",
      nr_cnpj: "required",
      nm_responsible_email: "email"
    }
  }
}

module.exports = StoreCompany
