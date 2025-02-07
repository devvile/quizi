import { useState, useCallback } from 'react';
import QUESTIONS from '../../data/questions';
import QuestionTimer from '../QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex= userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const results = (
    <div id="summary"> 
      <h2>Quiz Completed</h2>
    </div>);

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer)  {
         setUserAnswers((prevUserAnswers)=>{ return [...userAnswers, answer]})
        },[]);
    const handleSkipAnswer = useCallback(()=>{handleSelectAnswer(null),[handleSelectAnswer]});

  if (quizIsComplete) {
    return results;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(()=>Math.random()-0.5);

  const quizBody = (  <div id="quiz">
    <div id="question">
        <QuestionTimer key= {activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}/>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => 
          <li key={index} className="answer">
            <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button></li>)}
      </ul> 
    </div>
  </div>);

  return quizBody;
}