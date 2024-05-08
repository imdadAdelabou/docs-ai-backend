import { Router } from "express";
import { get } from "../controllers/pricing.js";

const pricingRouter = Router();

pricingRouter.get("/", get);

export default pricingRouter;
