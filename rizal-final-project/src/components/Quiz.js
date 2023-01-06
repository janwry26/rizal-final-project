import '../styles/quiz.css';

import {useState } from 'react';


const quizData = [
  {
    question: '1.	What is the name of the town where Jose Rizal was exiled?',
    options: ['Dapitan', 'Tondo', 'Calamba', 'Germany'],
    answer: 'Dapitan'
  },
  {
    question: '2.	How many years did Rizal stay in Dapitan?',
    options: ['4 Years', '2 Years', '1 Year ', '3 Years'],
    answer: '4 Years'
  },
  {
    question: '3.	Why was Jose Rizal exiled to Dapitan?',
    options: ['For his involvement in the Philippine Revolution', 'For his criticism of the Spanish colonial government', 'For his involvement in a plot to assassinate the Governor-General of the Philippines', 'For his involvement in a criminal organization'],
    answer: 'For his criticism of the Spanish colonial government'
  },
  {
    question: '4.	What did Rizal do during his exile in Dapitan?',
    options: ['Worked as a farmer', 'Worked as a teacher', 'Worked as a physician', 'All of the above'],
    answer: 'All of the above'
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
      <section className='score-section'>
      <div className='score' data-aos="fade-right" data-aos-duration="1500"
  data-aos-offset="200" key={currentQuestion}>
        <p>Quiz complete! Your score is {score} out of {quizData.length}.</p>
        <button className='btn-quiz' onClick={handleReset}>Try Again</button>
      </div>
      </section>
    );
  }

  const currentQuizData = quizData[currentQuestion];
  const { question, options } = currentQuizData;

  return (
    <section className='question-section'>
    <div className='quiz-container' data-aos="fade-up" data-aos-duration="1500"
    data-aos-offset="200" key={currentQuestion}>
      <p>{question}</p>
      <div className='options'>

      {options.map((option) => (
        <button className='btn-quiz' onClick={() => handleAnswer(option)}>{option}</button>
      ))}
       </div>
      <p >Score: {score}</p>
    </div>
  

    </section>
   
  );
}

export default Quiz;
