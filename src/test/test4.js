import React, { Component, createRef } from 'react'

export default class test4 extends Component {

  // unmount = () => {
  //   ReactDOM.unmountComponentAtNode(document.getElementById('test4'))
  // }

  constructor() {
    super()
    this.unmount = createRef(null)
  }


  state = {
    count:0
  }

  // componentDidMount() {
  //   const {count} = this.state
  //   this.timer = setInterval(()=>{
  //     // this.setState({count:count+1})
  //     console.log(count)
  //   },1000)
  // }

  componentWillUnmount() {
    console.log('clear')
  }

  uninstall = () => {
    let node = document.getElementById('test4')
    let child = document.getElementById('child')
    node.removeChild(child)
  }

  render() {
    return (
      <div id='test4'>
        <div>{this.state.count}</div>
        <div ref={this.unmount} id="child">test4</div>
        <button onClick={this.uninstall}>卸载</button>
      </div>
    )
  }
}
