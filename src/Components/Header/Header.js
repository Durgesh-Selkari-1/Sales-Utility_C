import react from "react"
import logo from './../../Assets/Images/logo.jpeg';
export default function Header() {


     return (
          <>
            
<div className="container-fluid  m-0 p-0 w-100" style={{backgroundColor:'white',position:'fixed',top:0}}>


                    <div className='row p-0 m-0' style={{backgroundColor:'white'}}>
                         <div className='col-12'>
                              <div className='container-fluid  m-0 p-0 d-flex justify-content-start align-items-center'>
                                   <div className="align-self-start py-2">
                                        <img src={logo} style={{height:50,width:50}} alt="Logo" className='img-fluid' />
                                   </div>
                                   <div className='mx-auto align-self-center'>
                                        {/* <p className='text-dark m-0 p-0'>List of Contact Forms</p> */}
                                   </div>



                              </div>

                         </div>

                    </div>

                    </div>
               
          </>
     )
}