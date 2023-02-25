import React from "react";

export default class testclass2 extends React.Component{

    constructor() {
        super()
        this.input1 = React.createRef();
        this.button1 = React.createRef();
    }

    showdata = () => {
        //this.refs已被弃用
        console.log(this.input1)
    }

    render() {
        return (
            <div>
                <input ref={this.input1} type="text" ></input>&nbsp;
                <button ref={this.button1} onClick={this.showdata}>点击</button>&nbsp;
                <input ref={this.input2} type="text" placeholder="失去焦点"></input>
            </div>
        )
    }
}