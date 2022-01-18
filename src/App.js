import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactFormT from './Components/ContactForm-1';
function App() {
  return (
   <>
 <Router>
      <div className="App">
       <ContactFormT/>
  
      </div>
    </Router>

   </>
  );
}

export default App;
