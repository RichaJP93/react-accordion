import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className="question">
      <header>
        <h6>{title}</h6>
        <button className="btn" onClick={() => {setShowInfo(!showInfo)}}>
          {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  )
}

export default Question