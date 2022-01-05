import React from 'react';
import { Field, ErrorMessage } from 'formik';


function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='border-0'>
      <label className='form-label'>{label}<span className='text-danger'>*</span></label>
      <br/>
      <div className=''>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
         
           <React.Fragment key={option.key}>
                  <div className='d-flex justify-content-start align-items-center' >
              
              <input
                type='radio'
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value === option.value}
                className=''style={{height:12,width:12}}
              />
              <label className='ms-2'style={{fontSize:'small'}} htmlFor={option.value}><small>{option.key}</small></label><br/>
           </div>
            </React.Fragment>

            )
          })
        }}
      </Field>
      <div className='text-danger' style={{fontSize:'small'}}><ErrorMessage name={name}/></div>
      </div>
     
    </div>
  )
}

export default RadioButtons



















