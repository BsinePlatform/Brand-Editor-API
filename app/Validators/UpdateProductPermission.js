'use strict'

class UpdateProductPermission {
  get rules () {
    return {
      id_product: 'required'
    }
  }
}

module.exports = UpdateProductPermission
