'use strict'

class StoreProductPermission {
  get rules () {
    return {
      id_product: 'required'
    }
  }
}

module.exports = StoreProductPermission
