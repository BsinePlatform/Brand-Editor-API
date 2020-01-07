'use strict'

class UpdateProductFeature {
  get rules () {
    return {
      id_product: "required",
      id_feature: "required"
    }
  }
}

module.exports = UpdateProductFeature
