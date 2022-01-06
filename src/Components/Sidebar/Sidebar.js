import react from "react";

import ContactFormApi2 from "../Dashboard/ContactFormApi2";
import './Sidebar.css'


export default function Sidebar() {


     return (
          <>
             
               <div className="d-flex flex-row Sidebar-dev ">


                    <div className="bg-dark  d-flex flex-column">

                         <div className="row my-2">
                              <div className="col-12 border">
                                   <div className="d-flex justify-content-start">
                                        <a href="#"><span>Contact Form</span></a>
                                   </div>

                              </div>
                         </div>
                         <div className="row my-2">
                              <div className="col-12 border">
                                   <div className="d-flex justify-content-start">
                                        <a href="#"><span>Contact Form Data</span></a>

                                   </div>

                              </div>
                         </div>

                    </div>
                  
               </div>

          </>
     )
}