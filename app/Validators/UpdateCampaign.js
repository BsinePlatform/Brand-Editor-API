'use strict'

class UpdateCampaign {
  get rules () {
    return {
      id_company: "required",
      id_user_creator: "required",
      nm_campaign: "required"
    }
  }
}

module.exports = UpdateCampaign
