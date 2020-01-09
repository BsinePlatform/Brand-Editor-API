'use strict'

class StoreAdditionalFeatureItem {
  get rules () {
    return {
      id_order_item:  "required",
      id_additional_feature: "required"
    }
  }
}

module.exports = StoreAdditionalFeatureItem
