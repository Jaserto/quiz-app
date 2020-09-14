import React, { useState, useEffect } from 'react';
import { Cuestionario } from './components'

const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficlty=easy';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
      })
  }, [])


  return questions.length > 0 ? (
    <div className="container">
      <Cuestionario data={questions[0]} />
    </div>
  ) : (
      <h2 className="text-2xl font-bold">Loading...</h2 >
    );



}

export default App;
