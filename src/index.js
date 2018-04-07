import React from 'react'

class FunctionalComponent extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount = (...args) => {
    const {initialState, componentDidMount} = this.props

    initialState && this.setState(initialState)
    componentDidMount && componentDidMount({state: this.state, setState: this.setStateFn}, ...args)
  }

  setStateFn = (state) => {
    this.setState(state)
  }

  render(){
    return (<span>{this.props.children({state: this.state, setState: this.setStateFn})}</span>)
  }

}

export default FunctionalComponent