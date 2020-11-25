import { useState } from 'react';
import { useInterval } from './useInterval';
import './App.css';

const questionBank = [
  {
    title: '"天下大势, 分久必合" 请问三国最后归于谁之手?',
    answer: '司马昭',
    level: 1,
  }
]

function App() {
  const [count, setCount] = useState(5);
  const [delay, setDelay] = useState(null);
  const [question, setQuestion] = useState({});
  const [answerStatus, setAnswerStatus] = useState(false);

  useInterval(() => {
    if (count === 0) {
      setDelay(null);
      setQuestion(questionBank[0]);
      return;
    }
    setCount(count - 1);
  }, delay);

  const handleChange = (e) => {
    console.log('handleChange', e.target.value);
  }
  const handleStart = () => {
    setCount(5);
    setDelay(1000);
    setQuestion({});
    setAnswerStatus(false);
  }
  const handleShowAnswer = () => {
    setAnswerStatus(true);
  }
  return (
    <div className="App">
      <h2>{question.title || 'Luck 三国 v.0.1'}</h2>
      <h3>{answerStatus && question.answer}</h3>
      <div className="btnGroup">
        <select onChange={handleChange}>
          <option value="1">简单</option>
          <option value="2">普通</option>
          <option value="3">困难</option>
        </select>
        <button onClick={handleStart}>开始 (<span>{count}</span>s)</button>
        <button onClick={handleShowAnswer}>答案</button>
      </div>
    </div>
  );
}

export default App;
