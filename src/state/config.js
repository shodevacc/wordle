
import answerkey from './answerkey.json'
// console.log(answerkey, typeof answerkey, answerkey[0])
export const row = 6;
export const column = 5;
const questionNumber = Math.floor(Math.random() * answerkey.length);
// console.log("question", questionNumber);
export const question = answerkey[questionNumber].question;
export const setword = answerkey[questionNumber].answer;
export const wrongColor = 'rgb(58,58,60)'
export const correctColor = 'rgb(106,170,100)'
export const wrongPositionColor = 'rgb(181,159,59)'