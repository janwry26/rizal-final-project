import '../styles/quiz.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import {useEffect,useState } from 'react';


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
  useEffect(()=>{
    AOS.init({duration:1500})
  },[]);
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
      <div className='score' data-aos="fade-left" key={currentQuestion}>
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
    <div className='quiz-container' data-aos="flip-right" key={currentQuestion}>
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
