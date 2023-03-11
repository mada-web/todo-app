import React from 'react';
import input from './Input';

const Input = ({ name, onChange }) => {
    return <input type="text" name={name} onChange={(event) => onChange(event.target.value)}  className='w-2/6 h-10 rounded-xl border-2 border-solid ' />;
};

export default Input;
