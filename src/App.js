import React, { useState, useEffect } from 'react';
import { Cuestionario } from './components'

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficlty=easy&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });

  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

  }


  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl font-bold text-white">Your score was {score}</h1>) :
        (<Cuestionario data={questions[currentIndex]} handleAnswer={handleAnswer} />

        )}
    </div>
  ) : (
      <h2 className="text-2xl font-bold">Loading...</h2 >
    );



}

export default App;
