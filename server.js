// Requiring the DOTENV package for environment variables
require('dotenv').config();

// Requiring File system package
const fs = require("fs");

// Requiring the Express JS Package to create servers
const express = require('express');
const app = express();

// Requiring the OpenAI Package to experiment with GPT3
const { Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// Create fine-tune file: file-a49PpBesM9WjB1ETglNRiVui

// openai
//     .createFineTune({
//         training_file: "file-a49PpBesM9WjB1ETglNRiVui",
//         model: "davinci"
//     })
//     .then((response) => {
//         console.log(response);
//     });

// openai
//     .listFineTunes()
//     .then((response) => {
//         console.log(response.data.data)
//     });

openai
    .createCompletion({
        model: 'curie:ft-personal-2022-06-21-01-38-31',
        prompt: 'Generate a random tweet for the "The War Within" brand.',
        max_tokens: 50,
        temperature: 1
    })
    .then((response) => {
        console.log(response.data.choices[0].text);
    });

// openai
//     .createCompletion({
//         model: 'davinci:ft-personal-2022-06-21-01-52-11',
//         prompt: 'Generate a random tweet for the "The War Within" brand.',
//         max_tokens: 50,
//         temperature: 1
//     })
//     .then((response) => {
//         console.log(response.data.choices[0].text);
//     });

// Upload training data

// openai
//     .createFile(
//     fs.createReadStream("data.jsonl"), "fine-tune"
// )
//     .then((response) => {
//         console.log(response);
//     });


// Requiring the read-excel-file/node package
// const readXlsxFile = require('read-excel-file/node');

// readXlsxFile('data.xlsx')
//     .then((rows) => {
//         for (let i = 2; i < 6; i++) {
//             const jsonstring = `{"prompt": "Generate a random tweet for the 'The War Within' brand.", "completion": "${rows[i][1]}"}`;
//             console.log(jsonstring);
//         }
        
//     });

// openai
//     .createCompletion({
//         model: "text-davinci-002",
//         prompt: "Create 24 tweets on the topic of self-discipline.",
//         max_tokens: 4000,
//         temperature: 1
//     })
//     .then((response) => {
//         console.log(response.data.choices[0].text);
//     });
  

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//     console.log('Responded to GET request!');
// });

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});