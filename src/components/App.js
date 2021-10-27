
import './App.css';
import RandomNum from '../components/randomNumber/randomNumber.js';
import CurrentDate from './currentDate/currentDate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/images/logo.svg' className="App-logo" alt="logo" />
        <p>
          Playing with React.
        </p>
        <div>
          <CurrentDate />
        </div>
      </header>
      <div>
        <RandomNum />
      </div>
    </div>
  );
}

export default App;
