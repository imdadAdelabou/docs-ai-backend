import Pricing from "../models/pricing.js";

async function get(req, res) {
  try {
    const pricing = await Pricing.find();

    return res.status(200).json({ message: "Success", pricing });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server error" });
  }
}

export { get };
// Path: controllers/pricing.js
