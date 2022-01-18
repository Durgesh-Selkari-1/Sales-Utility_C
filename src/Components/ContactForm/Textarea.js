import React from 'react'
import { Field, ErrorMessage } from 'formik'


function Textarea(props) {
  const { label, name, ...rest } = props
  return (
    <div className='border-0'>
      <label htmlFor={name}>{label}<span className='text-danger'>*</span></label><br />
      <div className=''>
        <Field className="form-control rounded-0" style={{ outlineStyle: 'none' }} as='textarea' id={name} name={name} {...rest} />
        <div className='text-danger' style={{ fontSize: 'small' }}><ErrorMessage name={name} /></div>
      </div>
    </div>
  )
}

export default Textarea;