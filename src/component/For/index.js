import React, { Component } from 'react'
import './index.css'

export default class For extends Component {

    chooseItem(item) {
        console.log(item)
    }

    render() {
        const a = [1,2,3]
        // const {itembox} = this.props
        return (
        <div>
            {
                a.map((item,index)=>{
                    return <span className='Item-name' key={index} onClick={()=>{this.chooseItem(item)}}>{item}</span>
                })
            }
        </div>
        )
    }
}
