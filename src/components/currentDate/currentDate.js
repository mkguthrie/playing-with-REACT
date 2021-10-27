import './currentDate.css'
// import {useState, useEffect} from 'react'

// function CurrentDate() {

//     const [date, setDate] = useState(new Date())
 
//     useEffect(() => {
//         var timer = setInterval(()=>setDate(new Date()), 1000 )
//         return function cleanup() {
//             clearInterval(timer)
//         }
    
//     });

//     return (
//         <div className="dateComponent">
//             <span>Time & Data Component</span>
//             <h5>{date.toLocaleDateString}</h5>
//         </div>
//     )
// }

// export default CurrentDate

import  React, { useState , useEffect } from 'react'

export const CurrentDate = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='dateComponent'>
            <span>Date & Time Component</span>
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default CurrentDate