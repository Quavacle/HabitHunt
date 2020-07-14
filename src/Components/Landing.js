import React, { setState } from 'react';
import BigButton from './BigButton'
import StatDashboard from './StatDash'
import AddHabit from './AddHabit'
import Brand from './Brand'
import RemoveModal from './RemoveModal';

const habits = ['Coding', 'Drink 1L of Water', 'Water Plants', 'Walk the Dog', 'Exercised']

export default class ButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      habits: [],
      showRemove: false,
      toRemove: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeHabit = this.removeHabit.bind(this);
    this.addHabit = this.addHabit.bind(this);
    this.showRemove = this.showRemove.bind(this);
    this.hideRemove = this.hideRemove.bind(this);
  }

  showRemove(i) {
    this.setState({ showRemove: true, toRemove: [i] })
  }

  hideRemove() {
    this.setState({ showRemove: false })
  }

  componentDidMount() {
    console.log('Main mount')
    const habitList = habits.reduce((acc, habit) => {
      acc[habit] = 0
      return acc
    }, {})
    this.setState({ habits: habitList })

  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleClick(props) {
    const { habits } = this.state
    let current = habits[props]
    habits[props] = current++

    this.setState(({ habits }) => ({
      habits: {
        ...habits,
        [props]: habits[props]++
      }
    }))
  }

  removeHabit(props) {
    console.log(props)
    let prevHabits = { ...this.state.habits }
    delete prevHabits[props]
    this.setState({ habits: prevHabits })
  }

  addHabit(props) {
    this.setState(({ habits }) => ({ habits: { ...habits, [props]: 0 } }))
  }

  render() {
    const habitList = Object.keys(this.state.habits)
    return (
      <div className="container">
        <RemoveModal
          show={this.state.showRemove}
          habit={this.state.toRemove}
          handleClose={this.hideRemove}
          removeHabit={this.removeHabit}
        />
        <div className="side-bar">
          <Brand />
          {(habitList.length > 0) ?
            <StatDashboard habits={this.state.habits} /> :
            <p>Please add some habits to track!</p>}
        </div>
        <div className="card-container">
          {habitList.map((i) => <BigButton
            key={i}
            habit={i}
            landingClick={this.handleClick}
            showRemove={() => this.showRemove(i)} />)}
          <AddHabit addHabit={this.addHabit} />
        </div>
      </div>
    )
  }
}