import mongoose from "mongoose";

const pricingSchema = mongoose.Schema({
  labelColor: { type: String, required: true, trim: true },
  label: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  advantages: { type: [String], required: true },
});

const Pricing = mongoose.model("Pricing", pricingSchema);

export default Pricing;
