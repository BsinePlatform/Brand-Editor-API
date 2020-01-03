'use strict'

class StorePaymentBill {
  get rules () {
    return {
      nm_assignor: "required",
      nr_agency: "required",
      nr_bill: "required",
      nr_document: "required",
      nr_bill_value: "required",
      nr_bin: "required",
      dt_end_payment_date: "required",
      nr_our_number: "required",
      nr_document_number: "required",
      id_order: "required"
    }
  }
}

module.exports = StorePaymentBill
