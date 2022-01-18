import React, { useState, useEffect } from 'react'

// import Axios from 'axios';
// import ContactApi from './ContactApi';

const ContactFormData = () => {


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

            <div className='container-fluid  mx-auto my-auto mb-5
                 table-responsive-xxl table-responsive-sm table-responsive-xl 
                 table-responsive table-responsive-lg table-responsive-md '>
                <p className='text-center h1 text-danger my-auto'>List of Contact Form</p>

                <table className="table mx-auto table-hover my-5 border text-center " >
                    <thead>

                        <tr style={{ fontSize: 'medium' }}>
                            <th scope="col" className='border text-center' >Id</th>
                            <th scope="col" className='border text-center'>Full Name</th>
                            <th scope="col" className='border text-center'>Company Name</th>
                            <th scope="col" className='border text-center'>Email</th>
                            <th scope="col" className='border text-center'>Subject</th>
                            <th scope="col" className='border text-center'>Message</th>
                        </tr>
                    </thead>
                    <tbody style={{}} >
                        {

                            users.map((curElem) => {
                                return (
                                    <>

                                        <tr >

                                            <th className='border text-start'><div>{curElem.id}</div></th>

                                            <td className='border text-start'><div>{curElem.full_name}</div></td>

                                            <td className='border text-start'><div>{curElem.company_name}</div></td>

                                            <td className='border text-start'><div>{curElem.email}</div></td>

                                            <td className='border text-start'><div>{curElem.subject}</div></td>

                                            <td className='border text-start'>{curElem.messages}</td>



                                        </tr>
                                    </>
                                )

                            })}
                    </tbody>
                </table>











            </div>









        </>
    )
}

export default ContactFormData;

