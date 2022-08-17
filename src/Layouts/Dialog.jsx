import React from 'react';

import '../style/Dialog.css'

const Dialog = ({ confirmDelete, rejectDelete }) => {


    return (
        <div className='dialog'>
            <h3>Are you sure to delete this task?</h3>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={rejectDelete}>No</button>
        </div>
    );
}

export default Dialog;