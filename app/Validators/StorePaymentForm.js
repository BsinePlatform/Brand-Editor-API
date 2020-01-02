'use strict'

class StorePaymentForm {
  get rules () {
    return {
      nm_form: "required|unique:payment_forms"
    }
  }
}

module.exports = StorePaymentForm
