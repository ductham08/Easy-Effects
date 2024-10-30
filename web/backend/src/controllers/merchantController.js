import Merchant from "../models/merchantModel.js";

export const getMerchant = async (req, res) => {
  try {

    const merchant = await Merchant.find()
    return res.json({
      "data": merchant,
      "message": "Get merchant success!",
      "erorr_code": 200
    })

  } catch (error) {

    return res.status(400).json({
      "erorr": error,
      "message": "Get merchant erorr!",
      "erorr_code": 205
    })

  }
};

export const getMerchantByShopUrl = async (req, res) => {
  try {
    const merchant = await Merchant.findOne({ shopURL: req.params.shopUrl }).exec();
    return res.json({
      "data": merchant,
      "message": "Get merchant by shop url success!",
      "erorr_code": 200
    })

  } catch (error) {

    return res.status(400).json({
      "erorr": error,
      "message": "Get merchant erorr!",
      "erorr_code": 205
    })

  }
};

export const createMerchant = async (req, res) => {
  try {

    const newMerchant = await new Merchant(req.body).save()
    return res.json({
      "data": newMerchant,
      "message": "Create new merchant success!",
      "erorr_code": 200
    })

  } catch (error) {

    return res.status(400).json({
      "erorr": error,
      "message": "Create new merchant fail!",
      "erorr_code": 205
    })

  }
}