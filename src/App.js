import logo from './logo.svg';
import './App.css';
import { Link , Redirect, Route } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import PubSub from 'pubsub-js';
// import Test from './test/test';
// import Testclass from './test/test1';
// import Testclass2 from './test/test2';
// import Testclass3 from './test/test3';
import Test4 from './test/test4'
import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';
import For from './component/For'
import Search from './component/Header/search';
import SearchList from './component/List/searchlist'
import TimeLine from './component/TimeLine'
import { Component } from 'react';

export default class App extends Component {

  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:false},
      {id:'003',name:'学习',done:true}
    ],
      users:[],
      isFirst: true,
      isLoading: false,
      err:'',
      hide:true
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }

  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:done}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  // 搜索
  UpdateAppState = (userState) =>{
    this.setState(userState)
  }

  PushTime = (e) => {
    const data = {
      name:e.target.innerHTML,
      url:e.target.href
    }
    PubSub.publish('TimeLine',{data})
  }

  //卸载组件
  unmount = () => {
    let node = document.getElementsByClassName('App-header')[0]
    let child = document.getElementById('test4')
    console.log(node,child)
    node.removeChild(child)
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Test />
        <Testclass proptest={()=>{console.log('test success')}} proptestparm={{
          test:"set props"
        }}/> */}
        {/* <Testclass2></Testclass2> */}
        {/* <Testclass3></Testclass3> */}
        <For></For>
        <div>
          <Link to="search" onClick={this.PushTime}>search</Link>&nbsp;
          <Link to="todo" onClick={this.PushTime}>todo</Link>&nbsp;
          <Link to="Timeline" onClick={this.PushTime}>Timeline</Link>&nbsp;
          <Link to="test4" onClick={this.PushTime}>test4</Link>
        </div>
        <Route path="/search">
          <div className='container'>
            <Search UpdateAppState={this.UpdateAppState}></Search>
            <SearchList {...this.state}></SearchList>
          </div>
        </Route>
        <Route path="/todo">
          <div className='todo-container'>
            <div className='todo-wrap'>
              <Header addTodo={this.addTodo}></Header>
              <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
              <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
            </div>
          </div>
        </Route>
        <Route path="/test4">
          {this.state.hide && <div>普通组件</div>}
          {!this.state.hide && <Test4></Test4>}
          {<button onClick={()=>{this.setState({hide:!this.state.hide})}}>切换</button>}
          {/* <button onClick={this.unmount}>卸载2</button> */}
        </Route>
        <Route to="Timeline" component={TimeLine}></Route>
        <Redirect to="/todo"></Redirect>
      </header>
    </div>
    )
  };
}
