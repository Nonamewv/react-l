import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './searchlist.css'

export default class serachlist extends Component {

  state = {
    newspaper:[],
  }

  componentDidMount() {
    this.token = PubSub.subscribe('news',(_,data)=>{
      this.setState({newspaper:data.users})
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  
  render() {
    const {users,isFirst,isLoding,err} = this.props
    return (
      <div className='s-box'>
        {
          isFirst ? <h2>请输入关键字</h2> :
          isLoding ? <h2>Loading.....</h2> :
          err ? <h2>{err}</h2> :
          users.map((userObj)=> {
            return(
              <div className='item' key={userObj.id}>
                <a rel="noreferrer" href={userObj.avatar_url}>
                    <img alt="head_portrait" src={userObj.avatar_url}/>
                </a>
                <p className='crad-text'>{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
