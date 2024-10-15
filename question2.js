// Question 2: Simple Chatbot (Medium)
// Problem Statement
// Create a simple chatbot program that can answer questions based on a
// predefined list of question-answer pairs. The chatbot should take in a user's
// question and try to find the closest matching question from the predefined
// questions by comparing words.
// InputObj
// ● A list of question-answer pairs.
// ● A user’s inputObj question (string).
// Output
// Return the answer corresponding to the closest matching question.
// Example
// Question-answer pairs:
// Question Answer
// What is your name? My name is Chatbot.
// How can I help you? I can assist you with your queries.
// What is the weather today? The weather is sunny.
// InputObj:
// "What's the weather like today?";
// Output:
// "The weather is sunny."

function chatbot(inputObj, currQuestion) {
  currQuestion = currQuestion
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .trim();
  let currWords = currQuestion.split(" ");
  //console.log(currQuestion,currWords)
  //whats the weather like today [ 'whats', 'the','weather', 'like', 'today' ]

  let match = null;
  let max = 0;

  for (let question in inputObj) {
    let currQuestion = question
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .trim();
    //  console.log(currQuestion) //what is your name

    let questionWords = currQuestion.split(" ");
    // console.log(questionWords)// [ 'what', 'is', 'your', 'name' ]

    let count = currWords.filter((word) => questionWords.includes(word)).length;
    // console.log(count) //  0 0 3

    if (count > max) {
      max = count;
      match = question;
    }
  }

  return match ? inputObj[match] : "i dont understand your question";
}

const inputObj = {
  "What is your name?": "My name is Chatbot.",
  "How can I help you?": "I can assist you with your queries.",
  "What is the weather today?": "The weather is sunny.",
};

let currQuestion = "What's the weather like today?";
let response = chatbot(inputObj, currQuestion);
console.log(response);
