import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

const initialState = {
  name: 'Tim',
  message: 'is learning TypeScript!'
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  readonly state: State = initialState;

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
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
