
import React from 'react';
import logo from './../../Assets/Images/logo.jpeg';
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';


class ContactForm2 extends Component {

    

   

    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            company_name: "",
            email: "",
            subject: "",
            message: "",
            // check1: "",
            // check2: true,
            touched:{
                full_name:false,                
            }

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type==='checkbox'?target.checked:target.value;
        const name = target.name;
        console.log(value);

        this.setState({
            [name]:value
        })

    }

    handleSubmit(event){
        console.log("Current State is:" + JSON.stringify(this.state));
        event.preventDefault();
        axios({
          method: "POST",
          url:"https://salesutilityc.herokuapp.com/api/contact",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }





    
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }
    validate(full_name,email){
        const errors={
            full_name:''
        };
        if(this.state.touched.full_name && full_name.length<2)
        errors.full_name='Full name should be greater than 3 characters';
        else if (this.state.touched.full_name && full_name.length>20)
        errors.full_name='Full name should be less than 20 characters';

        return errors;

    }

    resetForm(){
        this.setState({full_name:'', company_name: '', email:'',subject:'',message:''})
        // this.setState({full_name:'', company_name: '', email:'',subject:'',message:'', check1:'', check2:''})
      }

    render(){

        const errors = this.validate(this.state.full_name);





    return(
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
                            <label for="" className="form-label">Full Name<span className='text-danger'>*</span></label>
                            <input type="text"
                                name="full_name"
                                value={this.state.full_name}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('full_name')}
                                valid={errors.full_name===''}
                                invald={errors.full_name !==''}
                                required
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
                            <label for="" className="form-label">Company Name<span className='text-danger'>*</span></label>
                            <input 
                                type="text"
                                name="company_name"
                                value={this.state.company_name}
                                onChange={this.handleInputChange}
                                required className="form-control rounded-0" 
                                placeholder="Company Name"
                                 />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contact Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required className="form-control rounded-0"
                            placeholder="Email" />
                        {/* <p className='p-0 m-0 ms-2'>To change your Contact Email go to your <a href='#' className='' style={{ color: '#0076a8', textDecoration: 'none' }}>Account page</a>.</p> */}

                    </div>






                    <div className="mb-3">
                        <label for="" className="form-label">Subject<span className='text-danger'>*</span></label>
                        <div className='container-fluid m-0 p-0 ms-2' style={{ fontSize: 'small' }}>
                            <div className="form-check">
                                <input 
                                    type="radio"
                                    name="subject"
                                    value="Get a quote/discuss my project needs"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                    required id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Get a quote/discuss my project needs
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    name="subject"
                                    value="Propose a partnership opportunity"
                                    onChange={this.handleInputChange}
                                    className="form-check-input"
                                    type="radio"
                                    required
                                    id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Propose a partnership opportunity
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    name="subject"
                                   value="Find a job"
                                   onChange={this.handleInputChange}
                                   className="form-check-input" 
                                    type="radio" 
                                    required
                                     id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Find a job
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                name="subject"
                                value="Other"
                                onChange={this.handleInputChange}
                                    className="form-check-input" 
                                    type="radio" 
                                    required 
                                    id="flexRadioDefault1" 
                                    />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Other
                                </label>
                            </div>
                        </div>

                    </div>











                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
                        <textarea 
                            className="form-control rounded-0 "
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            id="message"
                            required 
                            rows="3"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox"
                            name="check1"
                            // checked={this.state.check1}
                            // onChange={this.handleInputChange}
                            className="form-check-input"
                            id="Check1" />
                        <label className="form-check-label" for="exampleCheck1" style={{ color: '#0076a8', fontSize: 'small' }}>Send copy to my email</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                        type="checkbox"
                        name='check2'
                        checked
                         className="form-check-input" 
                         id="Check2" 
                          />
                        <label className="form-check-label" for="exampleCheck2" style={{ color: '#0076a8', fontSize: 'small' }}>Add company to my shortlist</label>
                    </div>
                    <button
                     type="submit"
                     className="btn btn-primary btn-danger border-0 rounded-0"><span className='mx-2'>Submit</span></button>
                </form>

            </div>

        </div>
        <div>

        </div>

    </div>


        </>
    )
}
}
export default ContactForm2;