'use strict'

class StoreAdditionalFeature {
  get rules () {
    return {
      id_feature: "required",
      nm_additional_feature: "required",
    }
  }
}

module.exports = StoreAdditionalFeature
