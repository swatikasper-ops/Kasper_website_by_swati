import React from "react";
import "./Visiblity.css";
import ball from "../../../assets/images/ball.svg";


const Visiblity= () => {
  return (
<>


     {/* ================= VISIBILITY ================= */}
      <section className="visibility">
        <div className="visibility-container">
          <div className="visibility-text">
            <h2>
             Our IMS gives you real-time visibility 
              <br />into Stock, Sales, and Purchases.
            </h2>
          </div>

          <div className="why-left">
            <div className="why-image-wrapper">

              <img src={ball}>
              </img>
             
            </div>
          </div>
        </div>
      </section>
</>
  
  );
};

export default Visiblity;