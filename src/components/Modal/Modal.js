import './Modal.css'

export default function Modal({show, close, title}) {
    
    return (
        <>
        {
            show ?
            <div className="modal-backdrop" onClick={() => close()}>
                <div className="modal">
                    <h1>{title}</h1>
                    <span className="close" onClick={() => close()}>Close</span>
                </div>
                
            </div>
            : null
        }
        </>
        
    )
}
