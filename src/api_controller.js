import { Configuration, OpenAIApi } from "openai"
// const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = "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"

const getResponse = async (prompt) => {
  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
  
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const answer = completion.data.choices[0].message.content
    console.log("Raw response ")
    console.log(answer)

    return answer

  } catch (error) {
    console.log(error)

    return "Failure"
  }
}


export { getResponse }
