import React from 'react'

const InputContainer = ({value, setData, placeholder, setSearchData}) => {

    return (
        <div className='inputBox'>
            <input
            onChange={event => setData(event.target.value)}
            value={value}
            placeholder={placeholder}
            type="text" />
        </div>
    )
}

export default InputContainer
