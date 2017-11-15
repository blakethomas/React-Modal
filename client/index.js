import React, { Component } from 'react'
import { render } from 'react-dom'

function Modal(props) {
  if (!props.active) {
    return null
  }
  return (
    <div className="background">
      <div className="textbox">
        <h1 className="title">Welcome to the dark side</h1>
      </div>
    </div>
  )
}

function Title(props) {
  if (!props.active) {
    return null
  }
  return (
    <div>
      <h1 className="click">Click Me</h1>
    </div>
  )
}
class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false, showTitle: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      showTitle: !prevState.showTitle
    }))
  }

  render() {
    return (
      <div className="page">
        <Modal active={this.state.showModal} />
        <Title active={this.state.showTitle} />
        <button onClick={this.handleToggleClick}>
          {this.state.showModal ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

render(<Page />, document.querySelector('#root'))
