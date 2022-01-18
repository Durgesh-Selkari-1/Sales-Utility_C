import React from 'react';
import logo from './../../Assets/Images/logo.jpeg';
import Axios from 'axios';
import swal from 'sweetalert';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function ContactForm() {

    const initialValues = {
        fullName: '',
        companyName: '',
        email: '',
        subject: '',
        message: '',
        checkboxOptions1: false,
        checkboxOptions2: true
    }

    const subject = [
        { key: 'Get a quote/discuss my project needs', value: 'Get a quote/discuss my project needs' },
        { key: 'Propose a partnership opportunity', value: 'Propose a partnership opportunity' },
        { key: 'Find a job', value: 'Find a job' },
        { key: 'Other', value: 'Other' }
    ]
    const validationSchema = Yup.object({
        subject: Yup.string().required('Subject is required.'),
        message: Yup.string().required('Message is required.'),
    })

    function validateFullName(value) {
        let error;
        let regex1 = /^[^-\s]/;
        let regex2 = /^[a-zA-Z'_.0-9 ]+$/;
        if (!value) {
            error = 'Full Name is required.';
        } else if (!regex1.test(value)) {
            error = 'Full Name can not start with spaces.';
        } else if (!regex2.test(value)) {
            error = "Full Name must not have special Charecters."
        } else if (value.length < 3) {
            error = "Full Name must be at least 3 Characters."
        }
        return error;
    }

    function validateCompanyName(value) {
        let error;
        let regex3 = /^[^-\s]/;
        if (!value) {
            error = 'Company Name is required.';
        } else if (!regex3.test(value)) {
            error = 'Company Name can not start with spaces.';
        }
        return error;
    }


    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address.';
        }
        return error;
    }


    const onSubmit = (values, onSubmitProps) => {
        console.log('Form data', values)
        // console.log('Saved data', JSON.parse(JSON.stringify(values)))

        Axios({
            method: "POST",
            url: "https://salesutilityc.herokuapp.com/api/contact",
            data: values,
        }).then((response) => {
            if (response.status === 200) {
                swal("Sales Utility", "Form submitted successfully.", "success");
            } else if (response.status === 503) {
                swal("Sales Utility", "Something went wrong, go back and try again!.", "error");

            }
        })

        onSubmitProps.resetForm();
    }


    return (
        <>
            <div className='container-fluid my-auto my-5 mx-auto ' >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}

                >
                    {formik => {

                        return (

                            <div >
                                <div className='container-fluid mx-auto'>
                                    <div className='col-12 d-flex justify-content-center'>

                                        <Form method='POST' onSubmit={formik.handleSubmit} >
                                            <div className="mb-3">
                                                <h3 className='m-0  p-0' style={{ color: '#bb2428' }}><img src={logo} alt="iView" className='img-fluid' /> Sales Utility</h3>
                                                <hr className='' style={{ color: '#0076a8' }} />
                                                <p className=''>Contact Sales Utility using the form below</p>
                                            </div>
                                            <div className="mb-3">
                                                <TextField label="Full Name" validate={validateFullName} name="fullName" type="text" placeholder="Full Name" />
                                            </div>
                                            <div className="mb-3">
                                                <TextField label="Company Name" validate={validateCompanyName} name="companyName" type="text" placeholder="Company Name" />
                                            </div>
                                            <div className="mb-3">
                                                <TextField label="Contact Email" validate={validateEmail} name="email" type="text" placeholder="Your Email" />
                                            </div>
                                            <div className="mb-2">
                                                <FormikControl
                                                    control='radio'
                                                    label='Subject'
                                                    name='subject'
                                                    options={subject}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <FormikControl
                                                    control='textarea'
                                                    label='Message'
                                                    name='message'
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <label className='d-flex align-items-center' >
                                                    <Field type="checkbox" name="checkboxOptions1" style={{ height: 12, width: 12 }} />
                                                    <span className='mx-2' style={{ fontSize: 'small' }}>Send copy to my email</span>
                                                </label>

                                                <label className='d-flex align-items-center'>
                                                    <Field type="checkbox" name="checkboxOptions2" style={{ height: 12, width: 12 }} />
                                                    <span className='mx-2' style={{ fontSize: 'small' }}>Add company to my shortlist</span>
                                                </label>
                                            </div>
                                            <button className='btn btn-danger mt-3 border-0 rounded-0' type='submit'>Submit</button>

                                        </Form>
                                    </div>
                                </div>
                            </div>

                        )
                    }}

                </Formik>


            </div>











        </>
    )
}

export default ContactForm;