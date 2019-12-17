'use strict'

class StoreSubCategory {
  get rules () {
    return {
      id_category: 'required',
      nm_subcategory: 'required',
    }
  }
}

module.exports = StoreSubCategory
