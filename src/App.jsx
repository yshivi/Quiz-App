// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from 'react'
import Data from './Components/Data.json'
import Question from './Components/Question';
import Option from './Components/Option';
import "./index.css";

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [correctAns, setCorrectAns] = useState(null)

  const handleClick = (i) => {
    setSelectedIndex(null)
    setCorrectAns(null)
    setCount((previousState) => {
      return previousState + 1
    }
    )
    if (count === 3) {
      setCount(0)
    }
  }

  function optionClick(i) {
    setSelectedIndex(i)
    setCorrectAns(Data[count].correctAns)
  }

  return (
    <div className='container'> <h1>Quiz-App</h1>
      <Question que={Data[count].question} />
      {Data[count].opstion.map((option, i) => {
        return (<Option key={i} option={option} answer={Data[count].opstion} i={i}
          optionClick={optionClick} correctAns={correctAns} selectedIndex={selectedIndex} />)
      })}
      <button className='btn' onClick={handleClick}>Next</button>
    </div>
  )
}

export default App

{/* <button className='next btn' onClick={nextQuestion}>Back</button> */ }

// const backQuestion = (i) => {
//   setCount(count + 1)
//   if (count === 6)
//     setCount(0)
// }