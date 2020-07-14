import React, { useState } from 'react';
import './button.css'

const BigButton = (props) => {
  const [clicked, setClick] = useState(props.amount || 0)
  return (
    <div className="card">
      <div className="card-header">
        <h3>{props.habit || 'No habit here!'}</h3>
      </div>
      <p>You've done this thing {clicked} times!</p>
      <button onClick={() => {
        setClick(clicked + 1);
        props.landingClick(props.habit);
      }}>I did the thing!</button>
      <button onClick={() => {
        props.showRemove();
      }}>Remove Habit</button>
    </div >

  )
}

export default BigButton;