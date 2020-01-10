'use strict'

class UpdateGalleryPermission {
  get rules () {
    return {
      id_gallery: "required"
    }
  }
}

module.exports = UpdateGalleryPermission
