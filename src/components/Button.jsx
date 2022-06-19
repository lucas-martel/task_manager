import React from 'react';
import './Button.css';

const Button = ({children, onClick, id}) => {
    return ( 
        <button onClick={onClick} id = {id === '' ? {} : id}  className='button'>
            {children}
        </button>
     );
}
 
export default Button;