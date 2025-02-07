import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function QuestionTimer({timeout, onTimeout}) {    
  const [remaningTime,setRemainingTime ] =useState(timeout);

  useEffect(() => { console.log('setting timeout'); const timeout2 = setTimeout(onTimeout, timeout);
    return () => clearInterval(timeout2);
  },[ onTimeout]);
  useEffect(() => { console.log('setting interval'); const interval = setInterval( ()=>{setRemainingTime((prevRemainingTime)=>prevRemainingTime-100);}, 100);
    return ()=>{clearInterval(interval);};
  },[]);

  return (<progress id="question-time" max={timeout} value={remaningTime}/>
  );
}


// Deklaracja PropTypes pod komponentem
QuestionTimer.propTypes = {
  timeout: PropTypes.number.isRequired,
  onTimeout: PropTypes.func.isRequired
};