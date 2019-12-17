'use strict'

class StoreCategory {
  get rules () {
    return {
      id_company: 'required',
      nm_category: 'required'
    }
  }
}

module.exports = StoreCategory
