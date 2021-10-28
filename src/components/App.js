
import './App.css';
import RandomNum from '../components/randomNumber/randomNumber.js';
import CurrentDate from './currentDate/currentDate';
import GithubProfile from './fetchGithubProfile/fetchGithubProfile';
import RemoveArrayItem from './removeArrayItems/removeArrayItems';
import ConditionalImage from './conditionallyShowImage/conditionallyShowImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/images/logo.svg' className="App-logo text-focus-in" alt="logo" />
        <p className="text-focus-in">
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
        <div className='slide-bottom'>
          <RemoveArrayItem />
        </div>
        <div className='slide-bottom'>
          <ConditionalImage />
        </div>
      </div>
      
    </div>
  );
}

export default App;
