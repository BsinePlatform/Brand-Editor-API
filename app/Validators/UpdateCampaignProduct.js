'use strict'

class UpdateCampaignProduct {
  get rules () {
    return {
      id_product: "required",
      id_campaign: "required"
    }
  }
}

module.exports = UpdateCampaignProduct
