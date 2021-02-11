import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component<any> {
  constructor(props: object) {
    super(props);
    console.log('contructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name='Tim' message='This is a message' />
        </header>
      </div>
    );
  }
}

export default App;
