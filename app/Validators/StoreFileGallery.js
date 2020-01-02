'use strict'

class StoreFileGallery {
  get rules () {
    return {
      id_gallery: 'required',
      id_user_upload: 'required',
      path_file: 'required'
    }
  }
}

module.exports = StoreFileGallery
