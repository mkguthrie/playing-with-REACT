
import './App.css';
import RandomNum from '../components/randomNumber/randomNumber.js';
import CurrentDate from './currentDate/currentDate';
import GithubProfile from './fetchGithubProfile/fetchGithubProfile';

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
      <div className="App-contents">
        <div className='slide-bottom'>
          <RandomNum />
        </div>
        <div className='slide-bottom'>
          <GithubProfile />
        </div>
      </div>
      
    </div>
  );
}

export default App;
