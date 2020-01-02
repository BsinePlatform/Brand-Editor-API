'use strict'

class UpdateGallery {
  get rules () {
    return {
      id_user_creator: 'required',
      nm_gallery: 'required'
    }
  }
}

module.exports = UpdateGallery
