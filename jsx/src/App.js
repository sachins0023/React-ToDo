import React, { Component } from 'react';
import './App.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archived: false,
    }
  }

  archiveFn() {
    this.setState({
      archived: true,
    })
  }

  render() {
      return (
        <div className="list-box">
          <button className="delete-button" onClick={() => this.archiveFn()}>✔</button>
          {(this.state.archived === false)?
          (<div className="todo-text-red" >{this.props.inputText}</div>):
          (<div className="todo-text-green" >{this.props.inputText}</div>)}
        </div>
      );
    
}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      text:'',
      value: '',
      items: [],
      letterCount: 250,
      addFlag: 0,
    };
    this.updateState=this.updateState.bind(this);
    this.updateValue=this.updateValue.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  updateState(event) {
    let textLength = event.target.value.length;
    this.setState({
      text: event.target.value,
      letterCount: 250 - textLength,
    });
  }

  updateValue() {
    if (this.state.text === '') {
      this.setState({
        addFlag: 0
      });
    }
    else {
      let textLength = event.target.value.length;
      console.log(this.state.text)
      let stateText = this.state.text;
      this.setState({
        value: stateText,
        items: [...this.state.items, stateText],
        text: '',
        letterCount: 250 - textLength,
      });
    }
  }

  clearAll() {
    this.setState({
      items: []
    })
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <div className="app">
        <div className="top">
          <div className="top-input">
            {(this.state.text !== '')?
            (<textarea className="input-area" type="text" maxLength={250} onChange={this.updateState} value={this.state.text}></textarea>):
            (<textarea className="input-area" type="text" maxLength={250} onChange={this.updateState} value={this.state.text} placeholder="Add an event..."></textarea>)}
            <div className="buttons">
              <button className="button" onClick={this.updateValue}>Add</button>
              <button className="button" onClick={this.clearAll}>Clear</button>
            </div>
          </div>
          <div className="top-count">
            {this.state.letterCount} characters left
          </div>
        </div>
        <div className="bottom">
          {this.state.items.map((item, index) => (
            <ToDo inputText={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
