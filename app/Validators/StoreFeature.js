'use strict'

class StoreFeature {
  get rules () {
    return {
      nm_feature: 'required|unique:features'
    }
  }
}

module.exports = StoreFeature
