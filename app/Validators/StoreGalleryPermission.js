'use strict'

class StoreGalleryPermission {
  get rules () {
    return {
      id_gallery: "required"
    }
  }
}

module.exports = StoreGalleryPermission
