import React, { Component } from 'react';
import Header from './component/header.js';
import Content from './component/content.js';
import Footer from './component/footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // text , finish
      inputVal: '',
      isAll: false
    }
    this.handleKeyPunish = this.handleKeyPunish.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickFinish = this.handleClickFinish.bind(this);
  }

  handleKeyPunish(e) {
    if(e.keyCode === 13){
      const text = this.state.inputVal;
      const todo = {
        text,
        finish: false
      }
      let todos = this.state.todos;
      todos.push(todo);
      this.setState({
        todos: todos
      })
      console.log(todos);
      this.setState({
        inputVal: ''
      })
    }
  }

  handleKeyChange(e) {
    let value = e.target.value.trim();
    console.log(value);
    if(value === '') return;
    this.setState({
      inputVal: value
    })
  } 

  handleClickDelete(index) {
    let todos = this.state.todos;
    delete todos[index];
    this.setState({
      todos: todos
    })
  }

  handleClickFinish(index) {
    let todos = this.state.todos;
    todos[index].finish = true;
    this.setState({
      todos: todos
    })
  }

  
  

  render() {
    let {handleKeyChange,handleKeyPunish,handleClickDelete,handleClickFinish} = this;
    let todos = this.state.todos;
    return (
      <div className="App">
        <Header handleKeyChange={handleKeyChange} handleKeyPunish={handleKeyPunish}/>
        <Content todos={todos} handleClickDelete={handleClickDelete} handleClickFinish={handleClickFinish}/>
        <Footer />     
      </div>
    );
  }
}

export default App;
