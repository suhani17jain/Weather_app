import React from 'react'

const Button = ({submitData, text}) => {

    return (
        <div className='btn'>
            <button  onClick = {() => submitData()}>{text}</button>
        </div>
    )
}

export default Button
