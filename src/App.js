import React, { useState, useEffect } from 'react';
import { Cuestionario } from './components'

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficlty=easy&type=multiple';

const API_URL_COMPUTERS = 'https://opentdb.com/api.php?amount=19&category=18&difficulty=medium';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);


  useEffect(() => {
    fetch(API_URL_COMPUTERS)
      .then((res) => res.json())
      .then((data) => {
        //setQuestions(data.results); problema
        const questions = data.results.map((question) =>
          ({
            ...question,
            answers: [
              question.correct_answer, ...question.incorrect_answers,
            ].sort(() => Math.random() - 0.5),

          }));

        setQuestions(questions);
      });

  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
    /*   const newIndex = currentIndex + 1
      setCurrentIndex(newIndex) */

  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  }


  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl font-bold text-white">Your score was {score}</h1>) :
        (<Cuestionario data={questions[currentIndex]} handleAnswer={handleAnswer} showAnswers={showAnswers} handleNextQuestion={handleNextQuestion} />
        )}
    </div>
  ) : (
      <h2 className="text-2xl font-bold">Loading...</h2 >
    );



}

export default App;
