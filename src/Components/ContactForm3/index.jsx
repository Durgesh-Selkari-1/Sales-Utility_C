
import React, { useState } from 'react';
import logo from './../../Assets/Images/logo.jpeg';

import Axios from 'axios';


export default function ContactForm3(){

    const url="http://localhost:3002/send"
    const [data, setData] = useState({
        fullname: "",
        companyname: "",
        email: "",
        subject: "",
        message: ""
        // check1: "",
        // check2: true,
        
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            fullname:data.name,
            companyname:data.companyname,
            email:data.email,
            subject:data.subject,
            message:data.message
        })
        .then(res=>{
            console.log(res.data)
        })
       
    }



    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)

    }

   

   

   

       





    return(
        <>

    <div className='container-fluid my-5 '>

        <div className='row '>
            <div className='col-12 d-flex justify-content-center'>


                <form className='mx-auto' method='POST' onSubmit={(e)=>submit(e)} >
                    <div className="mb-3">
                        <h3 className='m-0  p-0' style={{ color: '#bb2428' }}><img src={logo} alt="iView img" className='img-fluid' /> Sales Utility_C</h3>
                        <hr className='' style={{ color: '#0076a8' }} />
                        <p className=''>Contact Sales Utility_C using the form below</p>

                    </div>
                    <div className="mb-3">
                        <div className="col">
                            <label for="" className="form-label">Full Name<span className='text-danger'>*</span></label>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                value={data.fullname}
                                onChange={(e)=>handle(e)}
                                required
                                className="form-control rounded-0"
                                placeholder="Full Name"
                            />
                           
                          
                          
                        </div>

                    </div>
                    <div className="mb-3">
                        <div className="col">
                            <label for="" className="form-label">Company Name<span className='text-danger'>*</span></label>
                            <input 
                                type="text"
                                name="companyname"
                                id="companyname"
                                value={data.companyname}
                                onChange={(e)=>handle(e)}
                                required 
                                className="form-control rounded-0" 
                                placeholder="Company Name"
                                 />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contact Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e)=>handle(e)}
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
                                    id="subject"
                                    value="Get a quote/discuss my project needs"
                                    onChange={(e)=>handle(e)}
                                    className="form-check-input"
                                    required 
                                    />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Get a quote/discuss my project needs
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    name="subject"
                                    id="subject"
                                    value="Propose a partnership opportunity"
                                    onChange={(e)=>handle(e)}
                                    className="form-check-input"
                                    type="radio"
                                    required
                                    />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Propose a partnership opportunity
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    name="subject"
                                    id="subject"
                                   value="Find a job"
                                onChange={(e)=>handle(e)}
                                   className="form-check-input" 
                                    type="radio" 
                                    required
                                     />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ color: '#0076a8' }}>
                                    Find a job
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                name="subject"
                                id="subject"
                                value="Other"
                                onChange={(e)=>handle(e)}
                                    className="form-check-input" 
                                    type="radio" 
                                    required 
                                    
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
                            onChange={(e)=>handle(e)}
                            id="message"
                            value={data.message}
                            required 
                            rows="3"></textarea>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input 
                            type="checkbox"
                            name="check1"
                            checked={this.state.check1}
                            value={data.check1}
                            onChange={(e)=>handle(e)}
                            className="form-check-input"
                            id="Check1" />
                        <label className="form-check-label" for="exampleCheck1" style={{ color: '#0076a8', fontSize: 'small' }}>Send copy to my email</label>
                    </div> */}
                    {/* <div className="mb-3 form-check">
                        <input 
                        type="checkbox"
                        name='check2'
                        checked
                         className="form-check-input" 
                         id="Check2" 
                          />
                        <label className="form-check-label" for="exampleCheck2" style={{ color: '#0076a8', fontSize: 'small' }}>Add company to my shortlist</label>
                    </div> */}
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

