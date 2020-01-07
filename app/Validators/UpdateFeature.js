'use strict'

class UpdateFeature {
  get rules () {
    return {
      nm_feature: 'required|unique:features'
    }
  }
}

module.exports = UpdateFeature
