'use strict'

class StoreOrderItem {
  get rules () {
    return {
      nr_qty: "required",
      nr_price: "required",
      id_order: "required",
      id_product: "required"
    }
  }
}

module.exports = StoreOrderItem
