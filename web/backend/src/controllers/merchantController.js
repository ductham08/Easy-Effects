import Merchant from "../models/merchantModel.js";

export const getMerchant = async (req, res) => {
  try {
    
    return res.json({
      "data": [],
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