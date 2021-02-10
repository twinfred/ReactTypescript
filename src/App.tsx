import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message='This is a message' />
      </header>
    </div>
  );
}

export default App;
