import React from 'react';
import cn from './Select.module.sass';

const DEFAULT_VALUE = '';

function Select({ size = 'large',
                value = DEFAULT_VALUE,
                disabled,
                placeholder,
                options = [],
                handlerChange}) {

    const handlerSelect = (e) => {
        handlerChange && handlerChange(e.target.value)
    }

    return (
        <div className={cn.select__wrapper}>
            <select className={`${cn.select} ${cn[size]}`}
                    onChange={handlerSelect}
                    disabled={disabled}
                    defaultValue={value}>

                {placeholder && <option value={DEFAULT_VALUE}>{placeholder}</option>}
                {options.map((option, index) =>
                    <option key={index}
                            value={option.value}>
                        {option.label}
                    </option>)}

            </select>
        </div>
    );
}

export default Select;
