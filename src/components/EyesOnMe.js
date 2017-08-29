// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  render() {
    return (
      <button onBlur={this.blur} onFocus={this.focus}>submit</button>
    )
  }

  focus() {
    console.log('Good!')
  }

  blur() {
    console.log('Hey! Eyes on me!')
  }

}
