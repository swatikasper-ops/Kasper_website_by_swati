import React from "react";
import "./Hero_Services.css";
import { GoArrowDown } from "react-icons/go";

const Hero_Services = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="hero-heading">

          <h1>MICROSOFT D365 FINANCE & OPERATIONS</h1>

          <div className="hero_Paragraph">
            <p className="text-2xl">
              Microsoft Dynamics 365 Finance & Operations is a powerful
              enterprise resource planning solution designed to unify financial
              management, supply chain, manufacturing, and operations. It
              enables organizations to gain real-time visibility, automate core
              processes, improve efficiency.
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn-outline">Get A Quote</button>
          </div>

          {/* Arrow */}
          <div className="Go_Arrow" onClick={scrollDown}>
            <GoArrowDown />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero_Services;