import React from 'react';

const RemoveModal = ({ show, removeHabit, handleClose, habit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  console.log(habit)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Are you sure you want to remove {habit || 'this habit'}?</p>
        <button onClick={handleClose}>Nevermind! Save it!</button>
        <button onClick={() => {
          removeHabit(habit)
          handleClose()
        }}>Remove Habit</button>
      </section>
    </div >
  )
}

export default RemoveModal
