import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, meta)
    return (
        <div className='mb-2 mx-auto'>
            <label className='form-label' htmlFor={field.name}>{label}<span className='text-danger'>*</span></label>
            <input
                className='form-control shadow-none rounded-0'
                {...field} {...props}
                autoComplete='off'

            />
            <div className='text-danger' style={{ fontSize: 'small' }}> <ErrorMessage name={field.name} /></div>
        </div>
    )
}
