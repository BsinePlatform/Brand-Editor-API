'use strict'

class UpdateCompany {
  get rules () {
    return {
      nm_corporate_name: "required",
      nr_cnpj: "required"
    }
  }
}

module.exports = UpdateCompany
