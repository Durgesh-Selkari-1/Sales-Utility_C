import react from "react"
import logo from './../../Assets/Images/logo.jpeg';
export default function ContactApi() {


     return (
          <>
               <header>

                    <div className='row p-0 m-0'>
                         <div className='col-md-12 col-lg-12'>
                              <div className='container-fluid bg-primary m-0 p-0 d-flex justify-content-start align-items-center'>
                                   <div>
                                        <img src={logo} alt="Logo" className='img-fluid' />
                                   </div>
                                   <div className='mx-auto align-self-center'>
                                        <p className='text-light m-0 p-0'>List of Contact Forms</p>
                                   </div>



                              </div>

                         </div>

                    </div>


               </header>
          </>
     )
}