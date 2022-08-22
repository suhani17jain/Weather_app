import React from 'react';
import {useGlobalContext} from '../context/context';

const Error = () => {
    const { error } = useGlobalContext();
    return (
        <div className='error'>
            <h5>{error}</h5>
        </div>
    )
}

export default Error
