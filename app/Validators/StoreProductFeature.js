'use strict'

class StoreProductFeature {
  get rules () {
    return {
      id_product: "required",
      id_feature: "required"
    }
  }
}

module.exports = StoreProductFeature
