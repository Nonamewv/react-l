import React from "react";
import PropTypes from "prop-types"

export default class testclass extends React.Component { 
    // constructor(props,name){
    //     super(props)
    //     this.name = name
    //     //构造器中的this是组件的实例对象，也就是class testclass
    //     this.state = { 
    //         isTrue: false,
    //         isProps: false
    //     }
    //     //解决指向问题，bind方法会新生成一个指定对象的方法，并重新指向
    //     // this.call = this.call.bind(this)
    // }

    //类中直接赋值
    state = {
        isTrue: false,
        isProps: false
    }

    PropTypes = {
        name: PropTypes.string
    }

    static defaultProps = {
        name: 'test-name'
    }

    arr = [1,[2,3,[3,4]]]

    call() {
        //类中的方法默认开启了严格模式
        console.log('phone call' + this)
    }

    changestate() {
        const isTrue = this.state.isTrue
        //状态必须要通过setstate进行修改
        this.setState({isTrue:!isTrue})
    }

    //通过类中可以直接使用赋值语句，将方法赋值，然后通过箭头函数的无this，并向外层寻找，成功将方法内this指向对象
    changetest1 = () => {
        const isTrue = this.state.isTrue
        //状态必须要通过setstate进行修改
        this.setState({isTrue:!isTrue})
    }

    render() {
        //render中的this指向创建的实例对象
        console.log(this)
        const { proptest,proptestparm,name } = this.props
        const { isTrue } = this.state
        console.log(proptest())
        // console.log(isProps)
        return (
            <div>
                <h1 onClick={this.changetest1}>setState + { isTrue ? 'True' : 'False' }</h1>
                <h1 onClick={()=>{this.changestate()}}>箭头函数 + { isTrue ? 'True' : 'False' }</h1>
                <h1>父传子：{proptestparm.test}</h1>
                <h1>默认值：{name}</h1>
            </div>
        );
    }
}

// const test = new testclass('zs')
// console.log(test)

// const year = 2023
// function b (a) {
//     console.log(this)
//     return a;
// }
// const a = b.call(1,3)
// const c = b.apply(null,[3,4])
// console.log(year,c)