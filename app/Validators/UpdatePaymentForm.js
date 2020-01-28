'use strict'

class UpdatePaymentForm {
  get rules () {
    const id = this.ctx.params.id
    return {
      nm_form: `required|unique:payment_forms,nm_form,id,${id}`
    }
  }
}

module.exports = UpdatePaymentForm
