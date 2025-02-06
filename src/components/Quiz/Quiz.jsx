import { useState } from 'react';
import QUESTIONS from '../../data/questions';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex= userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    const results = (
    <div id="summary"> 
        <h2>Quiz Completed</h2>
    </div>)

    if (quizIsComplete) {
        return results;
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(()=>Math.random()-0.5);
    const handleSelectAnswer = (answer) => { setUserAnswers([...userAnswers, answer]);};

    const quizBody = (  <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer, index) => 
                <li key={index} className="answer">
                <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button></li>)}
            </ul> 
        </div>
      </div>)

    return quizBody;
}