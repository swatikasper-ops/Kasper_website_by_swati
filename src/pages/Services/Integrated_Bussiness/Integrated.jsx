import React from "react";
import "./Integrated.css";
 import tick from "../../../assets/images/tick.svg";

 import integrate from "../../../assets/images/integrate.jpg"

const Integrated = () => {
  return (

    <section className="why-choose">
           <div className="why_choose-content">
             <h2 className="why-main-heading">Integrated Business Applications for End-to-End Connectivity</h2>
   
             <div className="why-container">
               <div className="why-left">
                 <div className="why-image-wrapperr">
                   <img src={integrate} alt="choose" />
                 </div>
               </div>
   
               <div className="why-right">
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Finance</h4>
                     <p>The finance application streamlines finance processes, improves visibility, and supports faster, compliant decision-making.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Supply Chain</h4>
                     <p>The supply chain application streamlines end-to-end supply chain processes to improve agility and supplier collaboration.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Development & Customization</h4>
                     <p>We build Microsoft-standard customizations and integrations that are secure, scalable, and future-proof.</p>
                   </div>
                 </div>
   
                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Commerce</h4>
                     <p>Dynamics 365 Commerce centralizes omnichannel retail, pricing, promotions, and customer engagement in one platform.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Project Operations</h4>
                     <p>Project Operations centralizes project planning, cost control, and delivery to improve visibility and profitability.</p>
                   </div>
                 </div>

                 <div className="why-feature">
                   <img src={tick}></img>
                   <div>
                     <h4>Human Resources</h4>
                     <p>The HR application simplifies HR operations, strengthens workforce planning, and drives employee performance.</p>
                   </div>
                 </div>
                 
               </div>
             </div>
           </div>
         </section>
  );
};

export default Integrated;