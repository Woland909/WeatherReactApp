import React from 'react';
import s from './FormControls.module.css';


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error || props.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} />
            {hasError && <div>{meta.error}{props.error}</div>}
        </div>
    )
}