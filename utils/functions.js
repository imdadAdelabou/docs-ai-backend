import Pricing from "../models/pricing.js";

async function getDefaultPricing() {
  const basicPricing = await Pricing.findOne({ label: "Basic" });

  return basicPricing;
}

export { getDefaultPricing };
// Path: utils/functions.js
