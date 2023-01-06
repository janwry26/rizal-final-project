import '../styles/quiz.css';

import {useState } from 'react';


const quizData = [
  {
    question: '1.	What is the name of the town where Jose Rizal was exiled?',
    options: ['A. Dapitan', 'B. Tondo', 'C. Calamba', 'D. Germany'],
    answer: 'A. Dapitan'
  },
  {
    question: '2.	How many years did Rizal stay in Dapitan?',
    options: ['A. 4 Years', 'B. 2 Years', 'C. 1 Year ', 'D. 3 Years'],
    answer: 'A. 4 Years'
  },
  {
    question: '3.	Why was Jose Rizal exiled to Dapitan?',
    options: ['A. For his involvement in the Philippine Revolution', 'B. For his criticism of the Spanish colonial government', 'C. For his involvement in a plot to assassinate the Governor-General of the Philippines', 'D. For his involvement in a criminal organization'],
    answer: 'B. For his criticism of the Spanish colonial government'
  },
  {
    question: '4.	What did Rizal do during his exile in Dapitan?',
    options: ['A. Worked as a farmer', 'B. Worked as a teacher', 'C. Worked as a physician', 'D. All of the above'],
    answer: 'D. All of the above'
  },
  {
    question: "5.	How did Rizal's exile in Dapitan affect his relationship with the Philippine Revolution?",
    options: ['A. It strengthened his support for the revolution', 'B. It weakened his support for the revolution', 'C. It had no impact on his support for the revolution', 'D. It led to his active participation in the revolution'],
    answer: 'B. It weakened his support for the revolution'
  },
  {
    question: '6.	What did Rizal write during his exile in Dapitan?',
    options: ['A. El Filibusterismo', 'B. Mi último adiós', 'C. both a and b', 'D. None of the above'],
    answer: 'C. both a and b'
  },
  {
    question: '7.	What did Rizal do to improve the lives of the people of Dapitan during his exile? ',
    options: ['A.	Built a water system', 'B.	Established a hospital', 'C.	Implemented several agricultural and educational projects', 'D.	All of the above'],
    answer: 'D.	All of the above'
  },
  {
    question: "8.	What impact did Rizal's exile in Dapitan have on Philippine history? ",
    options: ['A.	It inspired the Philippine Revolution', "B.	It shaped the country's identity", 'C. Both a and b', 'D.	None of the above'],
    answer: 'C. Both a and b'
  },
  {
    question: '9.	What Rizal do in volunteering in Cuba?',
    options: ['A.	As a farmer', 'B.	As a painter', 'C. As an army doctor', 'D.	As a writer'],
    answer: 'C. As an army doctor'
  },
  {
    question: "10.	How did Rizal's exile in Dapitan impact his personal life? ",
    options: ['A.	It strained his relationship with his family', 'B. It allowed him to focus on his writing and intellectual pursuits ','C.	It provided him with new experiences and perspectives', 'D.	All of the above'],
    answer: 'D.	All of the above'
  },
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
