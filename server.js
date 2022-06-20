// Requiring the DOTENV package for environment variables
require('dotenv').config();

// Requiring the Express JS Package to create servers
const express = require('express');
const app = express();

// Requiring the OpenAI Package to experiment with GPT3
const { Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

openai
    .createCompletion({
        model: "text-davinci-002",
        prompt: "Write an article titled: Be Patient While Trying to Lose Weight.",
        max_tokens: 4000,
        temperature: 1
    })
    .then((response) => {
        console.log(response.data.choices[0].text);
    });
  

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Responded to GET request!');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});