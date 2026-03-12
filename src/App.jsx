import React from 'react'
// import Services_popup from './pages/Services_popup/Services_popup';
// import Inside_Blogs from './pages/Insight_Blogs/Inside_Blogs';
// import Main_Services from './pages/Services/Main_Services';
import { Routes,Route } from 'react-router-dom';

import Main_Solutions from './pages/Solutions/Main_Solution';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './pages/Solutions/Contact/Contact';








const App = () => {
  return (
    <>
 


      

    <Main_Solutions/>

    {/* <section id="demo">
        <Demo />
      </section> */}

    <section id="contact">
  <Contact />
</section> 

    {/* <Main_Services/> */}

    {/* <Inside_Blogs/> */}
  
    {/* <Services_popup/> */}





     
    </>
  )
}

export default App;