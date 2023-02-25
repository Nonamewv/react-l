import React, { Component } from 'react'
import './search.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class search extends Component {
    
    search = () => {
        const {value} = this.keyWorldElement
        this.props.UpdateAppState({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then((res)=>{
            this.props.UpdateAppState({isLoading:false,users:res.data.items})
            PubSub.publish('news',{users:res.data.items})
        },(err)=>{
            this.props.UpdateAppState({isLoading:false,err:err.message})
        })
    }

    render() {
        return (
            <div className='search-Header'>
                <div>Searching List</div>
                <input ref={c => this.keyWorldElement = c } placeholder='input the searching name' ></input>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
