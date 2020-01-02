'use strict'

class UpdatePaymentForm {
  get rules () {
    return {
      nm_form: "required|unique:payment_forms"
    }
  }
}

module.exports = UpdatePaymentForm
