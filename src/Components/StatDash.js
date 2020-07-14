import React from 'react'

const StatDashboard = (habits) => {
  const totalHabits = habits.habits

  const HabitCounts = () => {
    return (
      Object.keys(totalHabits).map((key, index) => {
        return <li key={index}> {key} has been completed {totalHabits[key]} times</li>
      })
    )
  }

  const HabitTotals = () => {
    const habitAmount = Object.keys(totalHabits).length
    const totalDone = Object.values(totalHabits).reduce((total, curr) => total + curr)
    return (
      <p>You've done a total of {totalDone} things over your {habitAmount} habits</p>
    )
  }

  return (
    <ul>
      <HabitCounts />
      <HabitTotals />
    </ul>
  )
}

export default StatDashboard
