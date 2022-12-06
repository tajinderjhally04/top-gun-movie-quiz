var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Tell me your Name  ');
console.log(`Hello ${userName}, Let's play quiz on Top Gun movie.`);

var questions = [
  {
    question : 'Who is actor ? ',
    answer : 'tom cruise'
  },
  {
    question: 'Is this biopic movie ? ',
    answer: 'yes'
  },
  {
    question: 'what kind of planes were there ? ',
    answer: 'f16'
  },
  {
    question: 'Who was the director of movie ? ',
    answer: 'tonny scott'
  }
];

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log('Yay, You are right.');
    score++;
    console.log('Your Score is : ', score);
  }
  else{
    console.log('Sorry, You are wrong.');
    score--;
    console.log('Your Score is : ', score);
  }
}

function checking(){
  for(var i = 0; i < questions.length; i++){
    var objectQuestions = questions[i];
    checkAnswer(objectQuestions.question, objectQuestions.answer);
  }
}
checking();

console.log('Your final score is : ', score);