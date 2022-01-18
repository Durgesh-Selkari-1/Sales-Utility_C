import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import ContactForm from './Components/ContactForm';
import ContactFormData from './Components/ContactFormData/ContactFormData';




export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/Dashboard" />
                <Route exact path="/Dashboard" component={ContactFormData}/>
                <Route exact  path="/ContactForm" component={ContactForm}/>
            </Switch>
        </BrowserRouter>        
    );
  

   
}
