'use strict'

class UpdateCompany {
  get rules () {
    return {
      nm_corporate_name: "required|unique:companies",
      nr_cnpj: "required|unique:companies"
    }
  }
}

module.exports = UpdateCompany
