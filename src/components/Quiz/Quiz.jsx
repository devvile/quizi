import { useState } from 'react';
import QUESTIONS from '../../data/questions';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex= userAnswers.length;

  return (<div id="question">
    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
    <ul id="answers">
      {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => <li key={index} className="answer">
        <button onClick={()=>{}}>{answer}</button></li>)}
    </ul> 
  </div>
  );
}
