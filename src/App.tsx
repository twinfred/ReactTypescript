import logo from './logo.svg';
import './App.css';

function App() {
  // tuple
  let aTuple: [string, number] = ['apple', 20];
  // enum
  enum Codes {first = 1, second = 2};
  // any
  let firstName: any = 'Tim';
  firstName = 12345;
  // void
  const warning = (): void => {
    console.log('warning!');
  }
  warning();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value { Codes.first } is of { typeof Codes.first } type
        </p>
      </header>
    </div>
  );
}

export default App;
