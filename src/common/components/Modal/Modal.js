import React from "react";
import "./Modal.scss"
 function Modal ({ handleClose, show, children }){
    const showHideClassName = show ? 'Modal display-block' : 'Modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
                </button>
            </section>
        </div>
    );
}

export default Modal;
