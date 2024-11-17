import React from 'react';
import '../styles/components/achievements.css';

function Achievemnets() {
    return ( 
        <div className='achievements rounded-5 p-2'>
            <div className='d-flex flex-column py-3 px-4 align-items-start'>
                <span className='fw-medium'>754,588</span>
                <p className='text-secondary-50 mb-0'>successfully resolved issues</p>
            </div>
            <div className='answers d-flex flex-column rounded-5 py-3 px-4 align-items-start'>
                <span className='fw-medium'>95%</span>
                <p className='text-secondary-50 mb-0'>answers have 5-star</p>
            </div>
        </div>
     );
}

export default Achievemnets;