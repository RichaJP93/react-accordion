import React, { useState } from 'react';
import data from './data';
import Question from './components/Question';

const App = () => {
  const [questions, setQuestions] = useState(data);
  
  return (
    <div className='container'>
      <h3>Questions And Answers About Login</h3>
      <div className="info">
        {questions.map((question, id) => {
        return <Question key={question.id} {...question} />
      })}
      </div>
    </div>
  )
}

export default App;