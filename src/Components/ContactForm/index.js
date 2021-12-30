
import React, { useState }  from 'react';
import logo from './../../Assets/Images/logo.jpeg'
import axios from 'axios';

export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject]=useState("");
    const [message, setMessage] = useState("");
    const [check1, setCheck1] = useState("");
    

    

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {fullname: fullname,companyname:companyname, email: email, subject:subject, message:message, check1:check1 };

        setAllEntry([...allEntry, newEntry]);
        console.log(newEntry);
    }


    return (
        <>
            <div className='container-fluid my-5 '>
                <div className='row '>
                    <div className='col-12 d-flex justify-content-center'>
                        <form className='mx-auto' method='post' onSubmit={submitForm}>
                            <div className="mb-3">
                                <h3 className='m-0  p-0' style={{color:'#bb2428'}}><img src={logo} className='img-fluid'/> Sales Utility_C</h3>
                                <hr className=''style={{color:'#0076a8'}} />
                                <p className=''>Contact Sales Utility_C using the form below</p>

                            </div>
                            <div className="mb-3">
                                <div className="col">
                                    <label for="" className="form-label">Full Name<span className='text-danger'>*</span></label>
                                    <input type="text" value={fullname}  onChange={(e) => setFullname(e.target.value)} required className="form-control rounded-0" placeholder="Full Name" aria-label="Full Name" />
                                </div>

                            </div>
                            <div className="mb-3">
                                <div className="col">
                                    <label for="" className="form-label">Company Name<span className='text-danger'>*</span></label>
                                    <input type="text" value={companyname} onChange={(e) => setCompanyname(e.target.value)} required className="form-control rounded-0" placeholder="Company Name" aria-label="Company Name" />
                                </div>

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Contact Email</label>
                                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}  required className="form-control rounded-0" placeholder="Email" aria-label="" />
                                <p className='p-0 m-0 ms-2'>To change your Contact Email go to your <a href='#' className='' style={{color:'#0076a8',textDecoration:'none'}}>Account page</a>.</p>

                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Subject<span className='text-danger'>*</span></label>
                                <div className='container-fluid m-0 p-0 ms-2' style={{ fontSize: 'small' }}>
                                    <div className="form-check">
                                        <input type="radio" name="subject" value="Get a quote/discuss my project needs" onChange={(e) => setSubject(e.target.value)}
                                         className="form-check-input" required id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1"style={{color:'#0076a8'}}>
                                            Get a quote/discuss my project needs
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input  name="subject" value="Propose a partnership opportunity" onChange={(e) => setSubject(e.target.value)} className="form-check-input" type="radio" required  id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1" style={{color:'#0076a8'}}>
                                            Propose a partnership opportunity
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input name="subject" value="Find a job" onChange={(e) => setSubject(e.target.value)} className="form-check-input" type="radio" required  id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1" style={{color:'#0076a8'}}>
                                            Find a job
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input  name="subject" value="Other" onChange={(e) => setSubject(e.target.value)} className="form-check-input" type="radio" required  id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1" style={{color:'#0076a8'}}>
                                            Other
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
                                <textarea className="form-control rounded-0 "value={message} onChange={(e) => setMessage(e.target.value)}  id="exampleFormControlTextarea1" required rows="3"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" value={true} onChange={(e) => setCheck1(e.target.value)} className="form-check-input" id="Check1" />
                                <label className="form-check-label" for="exampleCheck1" style={{color:'#0076a8',fontSize:'small'}}>Send copy to my email</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="Check2" checked />
                                <label className="form-check-label" for="exampleCheck2" style={{color:'#0076a8',fontSize:'small'}}>Add company to my shortlist</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-danger border-0 rounded-0"><span className='mx-2'>Submit</span></button>

                        </form>

                    </div>

                </div>
                <div>
                    {
                        allEntry.map((curElem)=>{
                            return(
                               <div className="">
                                   <p>{curElem.fullname}</p>
                                   <p>{curElem.email}</p>
                                   <p>{curElem.companyname}</p>
                                   <p>{curElem.subject}</p>
                                   <p>{curElem.message}</p>
                                   <p>{curElem.check1}</p>
                                 
                
                                </div>

                            )
                        })
                    }
                </div>

            </div>

        </>
    )
}