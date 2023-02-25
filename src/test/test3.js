import React from "react";

export default class testclass3 extends React.Component{

    state = {newsArr:[],num:0}

    list = React.createRef();

    componentDidMount() {
        setInterval(()=>{
            const {newsArr} = this.state
            let {num} = this.state
            const news = '新闻' + (newsArr.length+1)
            this.setState({newsArr:[news,...newsArr],num:num++})
        },1000)
    }

    getSnapshotBeforeUpdate() {
        return this.list.current.scrollHeight
    }

    componentDidUpdate(preProps,preState,height) {
        this.list.current.scrollTop += this.list.current.scrollHeight - height
    }

    render() {
        return (
            <div className="list" ref={this.list}>
                {
                    this.state.newsArr.map((n,index)=>{
                        return <div key={index} className="news">{n}</div>
                    })
                }
            </div>
        )
    }
}