// Creating questions

var questions = [
 new Question("Who was the first president of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington"),
 new Question("What is the answer to the Ultimate Question of Life, the Universe and Everything?", ["Pi", "42"], "42")
];

//Creating quiz
var quiz = new Quiz(questions);

//Display quiz
QuizUI.displayNext();