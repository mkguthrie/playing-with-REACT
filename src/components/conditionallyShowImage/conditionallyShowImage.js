import { useState } from "react";

function ConditionalImage() {
    const [imageEvent, setShowImg] = useState(true)

    // console.log(imageEvent)

    return (
        <>
            <h3>Conditionally Show/Hide Image Component</h3>
            <p>Using the useState hook, show or hide the image.</p>
            {imageEvent && (
                <div>
                    <button onClick={() => setShowImg(false)}>Hide Image</button>
                </div>
            )}
            {!imageEvent && (
                <div>
                    <button onClick={() => setShowImg(true)}>Show Image</button>
                </div>
            )}
            {imageEvent && (
                <div>
                    <img src='/images/logo.svg' className="" alt="logo" />
                </div>
            )}
            
        </>
    )
}

export default ConditionalImage