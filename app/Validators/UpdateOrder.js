'use strict'

class UpdateOrder {
  get rules () {
    return {
      id_user: "required",
      nr_total_price: "required",
      dt_date_order: "required",
      id_payment_form: "required",
      nm_status: "required",
      nr_postage_value: "required"
    }
  }
}

module.exports = UpdateOrder
