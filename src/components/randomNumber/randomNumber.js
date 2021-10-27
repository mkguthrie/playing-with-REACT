import './randomNumber.css';
import { useState } from 'react';

function RandomNum() {

    let initNum = Math.floor(Math.random()*100)
    const [number, setNumber] = useState(initNum)

    const handleNumChange = () => {
        setNumber(Math.floor(Math.random() * 100))
    }

    return (
        <div className='RandomNum'>
            <h3>Random Number Component</h3>
            <p>Click the button to generate a random number (up to 100).</p>
            <h2>{number}</h2>
            <button onClick={handleNumChange}>New Number</button>
        </div>
    )
}

export default RandomNum