import React from 'react';
import cn from './Input.module.sass';

function Input({value, placeholder = "", type = "text", onChange}) {

    const handlerChange = (e) => {
        onChange && onChange(e.target.value)
    }

    return (
        <div className={cn.input__wrapper}>
            <input className={cn.input}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlerChange}/>
        </div>
    );
}

export default Input;
