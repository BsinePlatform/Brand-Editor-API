'use strict'

class StoreCompany {
  get rules () {
    return {
      nm_corporate_name: "required",
      nr_cnpj: "required"
    }
  }
}

module.exports = StoreCompany
