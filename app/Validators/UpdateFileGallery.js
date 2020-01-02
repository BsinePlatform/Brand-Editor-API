'use strict'

class UpdateFileGallery {
  get rules () {
    return {
      id_gallery: 'required',
      id_user_upload: 'required',
      path_file: 'required'
    }
  }
}

module.exports = UpdateFileGallery
