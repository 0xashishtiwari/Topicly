import React from 'react';
import './TextInput.css';

const TextInput = ({...props}) => {
  return (
    <div>
        <input className='input' type="text"  {...props}/>
    </div>  
  )
}

export default TextInput