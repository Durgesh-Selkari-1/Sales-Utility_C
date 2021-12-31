
import React from 'react';
import logo from './../../Assets/Images/logo.jpeg';
import { Component } from 'react/cjs/react.production.min';
import Axios from 'axios';
import swal from 'sweetalert';



class ContactForm2 extends Component {

    

   

    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            company_name: "",
            email: "",
            subject: "",
            message: "",
            checkbox: false,
            check2: true,
            touched:{
                full_name:false, 
                email:false               
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
        this.setState({
            [name]:value
        })
       

    }

    handleSubmit(event){
        console.log("Current State is:" + JSON.stringify(this.state));
        event.preventDefault();
        // alert("Form submitted successfully.");
        swal("Sales Utility_C", "Form submitted successfully.", "success");
        Axios({
          method: "POST",
          url:"https://salesutilityc.herokuapp.com/api/contact",
          data:this.state
        }).then((response)=>{
          if (response.data.status === 200) {
            alert("Message Sent.");
            this.data.resetForm()
          } else if(response.data.status === 503) {
            alert("Message failed to send.")
          }
        })
      }

      resetForm(){
        
        this.setState({full_name:"", company_name: "", email:"",subject:"",message:"", checkbox:"", check2:""})
      }
      
     

    





    
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }
    validate(full_name,email){
        const errors={
            full_name:'',
            email:''
        };
        if(this.state.touched.full_name && full_name.length<3)
            errors.full_name='Full name should be greater than 2 characters';
        else if (this.state.touched.full_name && full_name.length>20)
             errors.full_name='Full name should be less than 20 characters';
        
      
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length !==1)
            errors.email ='Email should contain a @'; 

        return errors;

    }

    

    render(){

        const errors = this.validate(this.state.full_name,this.state.email);
        console.log(this.state);

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
                            onBlur={this.handleBlur('email')}
                            valid={errors.email===''}
                            invald={errors.email!==''}
                            onChange={this.handleInputChange}
                            required
                            className="form-control rounded-0"
                            placeholder="Email" />
                               <p className='text-danger'>
                       <small> {errors.email}</small>    
                            </p>
                          
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
                               
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                <input 
                                name="subject"
                                value="Other"
                                onChange={this.handleInputChange}
                                    className="form-check-input" 
                                    type="radio" 
                                    required 
                                    id="flexRadioDefault1" 
                                    />
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
                            name="checkbox"
                            checked={this.state.checkbox}
                            onChange={this.handleInputChange}
                            className="form-check-input"
                            id="checkbox" />
                        <label className="form-check-label" for="examplecheckbox" style={{ color: '#0076a8', fontSize: 'small' }}>Send copy to my email</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                        type="checkbox"
                        name='check2'
                        checked={this.state.check2}
                        
                       
                        onChange={this.handleInputChange}
                         className="form-check-input" 
                         id="Check2" 
                          />
                        <label className="form-check-label" for="exampleCheck2" style={{ color: '#0076a8', fontSize: 'small' }}>Add company to my shortlist</label>
                    </div>
                    <button
                     type="submit"
                    //  data-bs-toggle="modal" 
                    //  data-bs-target="#exampleModal"
                     
                     className="btn btn-primary btn-danger border-0 rounded-0"><span className='mx-2'>Submit</span></button>
                </form>

            </div>

        </div>
       
    </div>

    



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sales Utility_C</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className='text-success'>
            Form sunmitted successfully.
        </p>
      </div>
     
    </div>
  </div>
</div>






        </>
    )
}
}
export default ContactForm2;