import User from "../models/user.js";
import Pricing from "../models/pricing.js";

async function update(req, res) {
  try {
    let user = await User.findByIdAndUpdate(req.userId.id, req.body, {
      new: true,
    });

    return res.status(200).json({ message: "Success", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error });
  }
}

async function updateUserPricing(req, res) {
  try {
    const { pricingId } = req.body;
    if (!pricingId) {
      return res.status(400).json({ message: "Pricing Id is required" });
    }
    const pricing = await Pricing.findById(pricingId);
    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }
    let user = await User.findByIdAndUpdate(
      req.userId.id,
      { pricing },
      {
        new: true,
      }
    ).populate("pricing");

    return res.status(200).json({ message: "Success", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server error", error: error });
  }
}

export { update, updateUserPricing };
