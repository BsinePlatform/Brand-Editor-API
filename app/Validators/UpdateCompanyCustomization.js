'use strict'

class UpdateCompanyCustomization {
  get rules () {
    return {
      id_company: "required",
      id_user_creator: "required"
    }
  }
}

module.exports = UpdateCompanyCustomization
