import React from 'react';

import '../style/style.css'

const Dialog = ({ confirmDelete, rejectDelete }) => {


    return (
        <div className='dialog'>
            <p>Are you sure to delete this task?</p>
            <button className='yes' onClick={confirmDelete}>Yes</button>
            <button className='no' onClick={rejectDelete}>No</button>
        </div>
    );
}

export default Dialog;