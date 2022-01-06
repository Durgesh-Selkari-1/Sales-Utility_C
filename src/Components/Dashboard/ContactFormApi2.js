import React, { useState, useEffect } from 'react'

import Axios from 'axios';
import ContactApi from './ContactApi';

const ContactFormApi2 = () => {


    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://salesutilityc.herokuapp.com/api/contact-show');

        setUsers(await response.json());

    }

    useEffect(() => {
        getUsers();

    }, []);




    return (



        <>
            {/* <ContactApi /> */}


            {/* {curElem.full_name} */}
        
                <div className='container-fluid mx-auto w-75 mb-5 mt-2' style={{position:'fixed',zIndex:1,top:80,left:180,height:'100vh',overflowY:'scroll'}}>
                        <table className="table text-start mx-auto table-hover border">
                                            <thead>
                                              
                                                <tr style={{position:'',zIndex:100}}>
                                                    <th scope="col" className='border'>Id</th>
                                                    <th scope="col">Full Name</th>
                                                    <th scope="col">Company Name</th>
                                                    <th scope="col">Email Address</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Message</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{fontSize:15,overflowY:'scroll'}} >
                                                {
                                                    
                                            users.map((curElem) => {
                             return (
                               <>

                                                <tr>
                                                   
                                                    <th className='border'><div className='text-justify'>{curElem.id}</div></th>
                                                    
                                                    <td><div className='text-justify'>{curElem.full_name}</div></td>
                                        
                                                    <td><div className='text-justify'>{curElem.company_name}</div></td>
                                                    
                                                    <td><div className='text-justify'>{curElem.email}</div></td>
                                                  
                                                    <td><div className='text-justify'>{curElem.subject}</div></td>
                                                    
                                                    <td><div className='text-justify'>{curElem.messages}</div></td>

                                                   
                                                   
                                                </tr>
                                                </>
                             )

                         })   }
                                            </tbody>
                                        </table>




                   






                </div>






     


        </>
    )
}

export default ContactFormApi2;

