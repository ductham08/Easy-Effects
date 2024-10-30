import Effect from "../models/effectModel.js";

export const getEffects = async (req, res) => {
  try {

    const dataEffects = await Effect.find();
    return res.json({
      "data": dataEffects,
      "message": "Get merchant success!",
      "erorr_code": 200
    });

  } catch (error) {

    return res.status(400).json({
      "erorr": error,
      "message": "Get merchant erorr!",
      "erorr_code": 205
    });
    
  }
};