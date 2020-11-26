import { useState } from 'react';
import { useInterval } from './useInterval';
import './App.css';

const questionBank = [
  {
    title: '“天下大势，分久必合” 请问三国最后归于谁之手?',
    answer: '司马昭',
    level: 1,
  },
  {
    title: '曹操在华容道，大笑后,先后遇见了谁?',
    answer: '赵云，张飞，关羽',
    level: 1,
  },
  {
    title: '“青梅煮酒论英雄”，请问是哪两个人在品论英雄?',
    answer: '曹操、刘备',
    level: 1,
  },
  {
    title: '“请问曾经当过刘备军师的【单幅】其实是何人?',
    answer: '徐庶',
    level: 1,
  },
  {
    title: '“火烧连营七百里”的吴国将领是?',
    answer: '陆逊',
    level: 1,
  },
  {
    title: '“关羽刮骨疗毒时和谁下棋?',
    answer: '马良（马谡的哥哥）',
    level: 1,
  },
  {
    title: '三英站吕布，“三英”是哪三位?',
    answer: '刘备、关羽、张飞',
    level: 1,
  },
  {
    title: '“蜀国五虎将”分别是谁?',
    answer: '关羽、张飞、赵云、马超、黄忠',
    level: 1,
  },
  {
    title: '魏延被何人所杀?',
    answer: '马岱',
    level: 1,
  },
  {
    title: '诸葛亮的草堂，中堂上有一副对联，请说出这幅对联?',
    answer: '淡泊以明志，宁静以致远',
    level: 3,
  },
  {
    title: '董卓为招降吕布送了一份大礼给吕布，请问这份礼物是什么?',
    answer: '赤兔马',
    level: 1,
  },
  {
    title:
      '资质分流，仪容秀丽，有勇有谋，气量狭小，嫉才妒能，蒋干中技，火烧赤壁（猜一人物）?',
    answer: '周瑜',
    level: 2,
  },
  {
    title: '衷心耿耿，英勇无敌，浑身是胆，大战长版，截江夺阿斗（猜一人物）?',
    answer: '赵云',
    level: 2,
  },
  {
    title: '豹头环眼，声若巨雷，怒打督邮，义释严颜（猜一人物）?',
    answer: '张飞',
    level: 2,
  },
  {
    title: '曹操因人进献一吉祥物，劳师动众的搭建了一座巨台，其名为?',
    answer: '铜雀台',
    level: 2,
  },
  {
    title: '赤壁之战中，谁献策诈降曹操?',
    answer: '黄盖',
    level: 1,
  },
  {
    title: '“洛神赋”其中的洛神是意指谁的妻子?',
    answer: '曹丕',
    level: 1,
  },
  {
    title: '孔明最后一次北伐时病死在哪里?',
    answer: '五丈原',
    level: 1,
  },
  {
    title: '在作战中眼睛被流箭射中，说“父精母血不可弃”而把眼睛吃掉的是谁?',
    answer: '夏侯惇',
    level: 2,
  },
  {
    title: '七步成诗的是?',
    answer: '曹植',
    level: 1,
  },
  {
    title: '三国歇后语，“周瑜打黄盖”，下一句?',
    answer: '一个愿打一个愿挨',
    level: 2,
  },
  {
    title: '是谁替刘备说降了马超?',
    answer: '李恢',
    level: 2,
  },
  {
    title: '三国演义中，曹仁的八门金锁阵被哪位军师所破?',
    answer: '徐庶',
    level: 2,
  },
  {
    title: '让关羽大意失荆州的东吴将领是?',
    answer: '吕蒙',
    level: 1,
  },
  {
    title: '东汉末年，“曹操挟天子以令诸侯”，句中的“天子”指谁?',
    answer: '汉献帝',
    level: 1,
  },
  {
    title: '馒头是谁发明的?',
    answer: '诸葛亮',
    level: 1,
  },
  {
    title: '赤兔马在三国中曾归属几位主人，分别是谁?',
    answer: '董卓、吕布、曹操、关羽、马忠',
    level: 3,
  },
  {
    title: '三十六计有一计的典故来源于三国，是哪一计?其中的主人公分别是？',
    answer: '空城计、司马懿和诸葛亮',
    level: 3,
  },
];

function shuffle(total) {
  return Math.floor(Math.random() * total);
}

function App() {
  const [count, setCount] = useState(5);
  const [delay, setDelay] = useState(null);
  const [question, setQuestion] = useState({});
  const [answerStatus, setAnswerStatus] = useState(false);
  const [level, setLevel] = useState(0);

  useInterval(() => {
    if (count === 0) {
      setDelay(null);

      const results = level ? questionBank.filter(item => item.level === level) : questionBank;
      const index = shuffle(results.length);
      setQuestion(results[index]);
      return;
    }
    setCount(count - 1);
  }, delay);

  const handleChange = (e) => {
    const value = e.target.value;
    setLevel(+value);
  };
  const handleStart = () => {
    setCount(5);
    setDelay(1000);
    setQuestion({});
    setAnswerStatus(false);
  };
  const handleShowAnswer = () => {
    setAnswerStatus(true);
  };
  return (
    <div className="App">
      <h2>{question.title ?  '🌟'.repeat(question.level) + question.title : 'Lucky 三国 v.0.1'}</h2>
      <h3>{answerStatus && question.answer}</h3>
      <div className="btnGroup">
        <select value={level} onChange={handleChange}>
          <option value="0">Select Level</option>
          <option value="1">Easy</option>
          <option value="2">Normal</option>
          <option value="3">Hard</option>
        </select>
        <button onClick={handleStart}>
          Start (<span>{count}</span>s)
        </button>
        <button onClick={handleShowAnswer}>Answer</button>
      </div>
    </div>
  );
}

export default App;
