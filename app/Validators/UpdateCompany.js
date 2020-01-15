'use strict'

class UpdateCompany {
  get rules () {
    return {
      nm_corporate_name: "required",
      nr_cnpj: "required",
      nm_responsible_email: "email"
    }
  }
}

module.exports = UpdateCompany
