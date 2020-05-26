import React from "react";

export const renderField = ({input, label, type, meta}) => {
    return (
        <div>
            <input {...input} placeholder={label} type={type}
                   className = 'form-control'/>
            {meta.touched &&
            ((meta.error && <span>{meta.error}</span>) ||
                (meta.warning && <span>{meta.warning}</span>))}
        </div>
    )
}