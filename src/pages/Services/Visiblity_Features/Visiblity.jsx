import React from "react";
import "./Visiblity.css";

import Blog2 from "../../../assets/images/smile-ball.svg";


const Visiblity= () => {
  return (
<>

{/* ================= VISIBILITY ================= */}
      <section className="visibility">
        <div className="visibility-container">
          <div className="visibility-text">
            <h2>
              Our IMS gives you real-time visibility into
              <br />
              Stock, Sales, and Purchases.
            </h2>
          </div>

          <div className="why-left">
            <div className="why-image-wrapper">
              <img src={Blog2} alt="choose" />
            </div>
          </div>
        </div>
      </section>

</>
  
  );
};

export default Visiblity;