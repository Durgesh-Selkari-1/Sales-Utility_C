import React from 'react';
import RadioButtons from './RadioButtons';
import Textarea from './Textarea';


function FormikControl(props){
    const {control, ...rest}=props;
    switch(control){
        case 'radio':
            return <RadioButtons {...rest}/>
        case 'textarea':
            return <Textarea {...rest} />
        default:
            return null
    }
   }
 export default FormikControl;