import Merchant from "../models/merchantModel";

export const getMerchant = async (req, res) => {
  try {
    const merchant = await new Merchant(req.body).find()
    return res.json(merchant)
  } catch (error) {
    return res.status(400).json({
      error: "Erorr get merchant"
    })
  }
};