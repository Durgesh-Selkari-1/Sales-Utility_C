
import AppRoutes from './../../AppRoutes'
import Sidebar from "../Sidebar/Sidebar";
import Header from './../Header/Header';



export default function ContactFormT() {


     return (
          <>
               <div className="row">
                    <div className="col-lg-12 w-100">
                         <Header />
                    </div>
               </div>
               <div className="row  d-flex mt-5 w-100">
                    <div className="col-lg-2  col-md-2 col-sm-2 col-2 my-5">
                         <Sidebar />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-10 my-5  mx-auto">
                         <AppRoutes />
                    </div>

               </div>





               {/* <ContactFormApi2/> */}



          </>

     )
}