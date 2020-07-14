import React from 'react'

export default class AddHabit extends React.Component {
  constructor(props) {
    super(props)
    const initialState = { habit: null }
    this.state = initialState
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }

  clearForm(e) {
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="add-card">
        <h3>Add a new habit!</h3>
        <form>
          <input type="text" name="habit" placeholder="Enter something to track!" onChange={this.handleChange} />

        </form>
        {this.state.habit ?
          <button className="new-button" onClick={() => {
            this.props.addHabit(this.state.habit);
            this.clearForm(this)
          }}>Click it!</button> : <button>Enter an activity!</button>
        }
      </div>
    )
  }
}