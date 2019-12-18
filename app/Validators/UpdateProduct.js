'use strict'

class UpdateProduct {
  get rules () {
    return {
      nm_product: 'required'
    }
  }
}

module.exports = UpdateProduct
