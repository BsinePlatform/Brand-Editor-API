'use strict'

class StoreCampaignProduct {
  get rules () {
    return {
      id_product: "required",
      id_campaign: "required"
    }
  }
}

module.exports = StoreCampaignProduct
