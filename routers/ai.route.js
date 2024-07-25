import { Router } from "express";
import askAiController from "../controllers/ai.js";

const aiRouter = Router();

// :type represents the type of AI model to use

aiRouter.post("/:type/summarize", () => {});
aiRouter.post("/:type/generate_image", () => {});
aiRouter.post("/:type/ask_ai", askAiController);

export default aiRouter;
