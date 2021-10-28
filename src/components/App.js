
import './App.css';
import RandomNum from '../components/randomNumber/randomNumber.js';
import CurrentDate from './currentDate/currentDate';
import GithubProfile from './fetchGithubProfile/fetchGithubProfile';
import RemoveArrayItem from './removeArrayItems/removeArrayItems';
import ConditionalImage from './conditionallyShowImage/conditionallyShowImage';
import Modal from './Modal/Modal';
import { useState } from 'react';

function App() {

  const [modal, setModalState] = useState(false)
  const Toggle = () => setModalState(!modal)

  console.log(modal)

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
          <RandomNum title="Random Number Component" />
        </div>
        <div className='slide-bottom'>
          <GithubProfile />
        </div>
        <div className='slide-bottom'>
          <RemoveArrayItem title="Remove Array Items Component" subtitle="Updating state when dependent on previous state." />
        </div>
        <div className='slide-bottom'>
          <ConditionalImage />
        </div>
        <div className='slide-bottom'>
          <h3>Open a modal</h3>
          <button onClick={() => Toggle()}>Click Me!</button>
        </div>

        
      </div>

      
      <Modal show={modal} close={Toggle} title="This is a modal component"/>
      
      
    </div>
  );
}

export default App;
