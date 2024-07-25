import openAiService from "../services/openai.js";

const askAiController = async (req, res) => {
  const model = req.params.type;
  const text = req.body.text;

  try {
    if (model === "chatgpt") {
      const result = await openAiService.run(text);
      return res.status(200).json({ data: result });
    }

    return res.status(404).json({ message: "Not yet implemented this model" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server error", error: e });
  }
};

export default askAiController;
