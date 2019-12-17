'use strict'

class UpdateCategory {
  get rules () {
    return {
      id_company: 'required',
      nm_category: 'required'
    }
  }
}

module.exports = UpdateCategory
