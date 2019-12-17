'use strict'

class UpdateSubCategory {
  get rules () {
    return {
      id_category: 'required',
      nm_subcategory: 'required',
    }
  }
}

module.exports = UpdateSubCategory
