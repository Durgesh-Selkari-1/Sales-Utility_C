
import React from 'react';
import logo from './../../Assets/Images/logo.jpeg';
import { Component } from 'react/cjs/react.production.min';
import Axios from 'axios';
import swal from 'sweetalert';



class ContactForm extends Component {





    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            company_name: "",
            email: "",
            subject: "",
            message: "",
            checkbox1: false,
            checkbox2: true,
            errors: {}
           
        }
        
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
       


    };

    componentDidUpdate(prevProps, prevState) {
        // this._commitAutoSave();
        // this.formValidation();
    
        if(JSON.stringify(this.state) != JSON.stringify(prevState)){
            this.formValidation();
        }
        // console.log(this.state)
        // debugger
      }

    handleInputChange(event) {

        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

        // this.formValidation();

    }

    formValidation () {

        var regex = /^[a-zA-Z'_.0-9 ]+$/;
        var regex3 = /^[^-\s]/; 
        var regx2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const { full_name, company_name, email, subject, message } = this.state;
        let isValid = true;
        const errors = {};
        debugger;
        if (full_name==='') {
            errors.full_name = "Full Name is required.";
            isValid = false;
        }

        if (full_name && !(full_name.match(regex3))) {
            errors.full_name = "Full Name can not start with spaces.";
            isValid = false;

        }

        if (full_name && full_name.length < 3) {
            errors.full_name = "Full Name must be at least 3 Characters.";
            isValid = false;
        }

        if (full_name && !(full_name.match(regex))) {
            errors.full_name = "Full Name must not have special Charecters.";
            isValid = false;
        }

        if (company_name === '') {
            errors.company_name = "Company Name is Required.";
            isValid = false;
        }
        if (company_name && !(company_name.match(regex3))) {
            errors.company_name = "Company Name can not start with spaces.";
            isValid = false;

        }
        if (email === '') {
            errors.email = "Email is required.";
            isValid = false;
        }
        if (email && !email.match(regx2)) {
            errors.email = "Please enter valid email address";
            isValid = false;
        }
        if (subject === '') {
            errors.subject = "Subject is required.";
            isValid = false;

        }
        if (message === '') {
            errors.message = "Message is required.";
            isValid = false;
        }


        this.setState({ errors });
        return isValid;


    }




    handleSubmit(event) {

        event.preventDefault();
        const isValid = this.formValidation();
        console.log("Current State is:" + JSON.stringify(this.state));
        if (isValid) {
            Axios({
                method: "POST",
                url: "https://salesutilityc.herokuapp.com/api/contact",
                data: this.state
            }).then((response) => {
                if (response.status === 200) {
                    swal("Sales Utility_C", "Form submitted successfully.", "success");
                    this.resetForm()
                } else if (response.status === 503) {
                    swal("Sales Utility_C", "Form failed to submit.", "error");
                }
            })

        }


    }

    resetForm() {

        this.setState({ full_name: "", company_name: "", email: "", subject: "", message: "", checkbox1: "" })
    }

         
      
   


    render() {
      
        const {errors,subject} = this.state;
        console.log(this.state);
        console.log(errors);
        return (
            <>
                <div className='container-fluid my-5 '>

                    <div className='row '>
                        <div className='col-12 d-flex justify-content-center'>


                            <form className='mx-auto' method='POST' onSubmit={this.handleSubmit.bind(this)} >
                                <div className="mb-3">
                                    <h3 className='m-0  p-0' style={{ color: '#bb2428' }}><img src={logo} alt="iView" className='img-fluid' /> Sales Utility_C</h3>
                                    <hr className='' style={{ color: '#0076a8' }} />
                                    <p className=''>Contact Sales Utility_C using the form below</p>
                                </div>
                                <div className="mb-3">
                                    <div className="col">
                                        <label className="form-label">Full Name<span className='text-danger'>*</span></label>
                                        <input type="text"
                                            name="full_name"
                                            value={this.state.full_name}
                                            onChange={this.handleInputChange}
                                            className="form-control rounded-0"
                                            placeholder="Full Name"
                                            
                                          
                                        />
                                        <p className='text-danger'>
                                            <small> {errors.full_name}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="col">
                                        <label className="form-label">Company Name<span className='text-danger'>*</span></label>
                                        <input
                                            type="text"
                                            name="company_name"
                                            value={this.state.company_name}
                                            onChange={this.handleInputChange}
                                            className="form-control rounded-0"
                                            placeholder="Company Name"
                                           
                                        />
                                        <p className='text-danger'>
                                            <small> {errors.company_name}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contact Email<span className='text-danger'>*</span></label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        className="form-control rounded-0"
                                        placeholder="Your Email" />
                                    <p className='text-danger'>
                                        <small> {errors.email}</small>
                                    </p>
                                    {/* <p className='p-0 m-0 ms-2'>To change your Contact Email go to your <a href='#' className='' style={{ color: '#0076a8', textDecoration: 'none' }}>Account page</a>.</p> */}

                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Subject<span className='text-danger'>*</span></label>
                                    <div className='container-fluid m-0 p-0 ms-2' style={{ fontSize: 'small' }}>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                name="subject"
                                                value="Get a quote/discuss my project needs"
                                                checked={subject === "Get a quote/discuss my project needs"}
                                                onChange={this.handleInputChange}
                                                className="form-check-input"
                                                id="flexRadioDefault1" />
                                            <label className="form-check-label" style={{ color: '#0076a8' }}>
                                                Get a quote/discuss my project needs
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="subject"
                                                value="Propose a partnership opportunity"
                                                checked={subject === "Propose a partnership opportunity"}
                                                onChange={this.handleInputChange}
                                                className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault1" />
                                            <label className="form-check-label" style={{ color: '#0076a8' }}>
                                                Propose a partnership opportunity
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="subject"
                                                value="Find a job"
                                                checked={subject === "Find a job"}
                                                onChange={this.handleInputChange}
                                                className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault1" />
                                            <label className="form-check-label" style={{ color: '#0076a8' }}>
                                                Find a job
                                            </label>
                                        </div>
                                        <div className="form-check">

                                            <label className="form-check-label" style={{ color: '#0076a8' }}>
                                                <input
                                                    name="subject"
                                                    value="Other"
                                                    checked={subject === "Other"}
                                                    onChange={this.handleInputChange}
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="flexRadioDefault1"
                                                />
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                    <p className='text-danger'>
                                        <small> {errors.subject}</small>
                                    </p>

                                </div>



                                <div className="mb-3">
                                    <label className="form-label">Message<span className='text-danger'>*</span></label>
                                    <textarea
                                        className="form-control rounded-0 "
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                        id="message"
                                        rows="3"></textarea>
                                    <p className='text-danger'>
                                        <small> {errors.message}</small>
                                    </p>
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        name="checkbox1"
                                        checked={this.state.checkbox1}
                                        onChange={this.handleInputChange}
                                        className="form-check-input"
                                        id="checkbox" />
                                    <label className="form-check-label" style={{ color: '#0076a8', fontSize: 'small' }}>Send copy to my email</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        name='checkbox2'
                                        checked={this.state.checkbox2}


                                        onChange={this.handleInputChange}
                                        className="form-check-input"
                                        id="Check2"
                                    />
                                    <label className="form-check-label" style={{ color: '#0076a8', fontSize: 'small' }}>Add company to my shortlist</label>
                                </div>
                                <button
                                    type="submit"


                                    className="btn btn-primary btn-danger border-0 rounded-0"><span className='mx-2'>Submit</span></button>




                                {/* {Object.keys(errors).map((key)=>{
                                return <div className='text-danger' key={key}>
                                    *{errors[key]}
                                </div>

                            })} */}


                            </form>

                        </div>

                    </div>

                </div>










            </>
        )
    }
}
export default ContactForm;