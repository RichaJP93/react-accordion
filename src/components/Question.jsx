import React from 'react'

const Question = ({title, info}) => {
  return (
    <div>
      <h6>{title}</h6>
      <p>{info}</p>
    </div>
  )
}

export default Question