import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class index extends Component {
    state = {
        TimeObj: []
    }

    componentDidMount() {
        PubSub.subscribe('TimeLine',(_,data)=>{
            this.setState({TimeObj:[...this.state.TimeObj,data]})
        })
    }

    pushTime = (index) => {
        this.state.TimeObj.splice(index,1)
        this.setState({TimeObj:this.state.TimeObj})
    }

    render() {
        return (
        <div>
            {
                this.state.TimeObj.map((item,index)=>{
                    return <div key={index} onClick={()=>this.pushTime(index)}>{item.data.name}</div> 
                })
            }
        </div>
        )
    }
}
