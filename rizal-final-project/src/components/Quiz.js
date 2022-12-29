import React, { useState } from 'react';
import '../styles/quiz.css';


const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is the highest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    answer: 'Mount Everest'
  },
  // Add more questions here...
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  }

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
  }

  if (currentQuestion >= quizData.length) {
    return (
      <div className='score'>
        <p>Quiz complete! Your score is {score} out of {quizData.length}.</p>
        <button onClick={handleReset}>Try Again</button>
      </div>
    );
  }

  const currentQuizData = quizData[currentQuestion];
  const { question, options } = currentQuizData;

  return (
    <div className='quiz-container'>
      <h1>{question}</h1>
      <div>

      {options.map((option) => (
        <button className='btn-quiz' onClick={() => handleAnswer(option)}>{option}</button>
      ))}
       </div>
      <p >Score: {score}</p>
    </div>
  );
}

export default Quiz;
