import React from 'react'

const InputContainer = ({value, setData, placeholder}) => {
    const searchValue = React.useRef('');
    const setValue = () => {
        setData(searchValue.current.value);
    }
    return (
        <div className='inputBox'>
            <input
            ref = {searchValue}
            onChange={setValue}
            value={value}
            placeholder={placeholder}
            type="text" />
        </div>
    )
}

export default InputContainer
