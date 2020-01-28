'use strict'

class UpdateFeature {
  get rules () {
    const id = this.ctx.params.id
    return {
      nm_feature: `required|unique:features, nm_feature, id, ${id}`
    }
  }
}

module.exports = UpdateFeature
