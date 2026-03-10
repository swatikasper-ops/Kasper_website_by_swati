import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Financial Management",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
      image: icon,
    },
    {
      title: "Supply Chain Management",
      description:
        "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
      image: icon,
    },
    {
      title: "Manufacturing Management",
      description:  "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
      image: icon,
    },
    {
      title: "Project Management",
      description:
        "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
         image: icon,
    },
    {
      title: "Human Resources Management",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },

    {
      title: "Asset Management",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },
    {
      title: "Reporting & Analytics",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },
    {
      title: "Security & Compliance",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },
    {
      title: "Business Intelligence & Decision Support",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },
  ];

  return (
    <section className="features-section">
      <div className="features_content">

        <h2 className="features-heading">Key Features</h2>

        <div className="features-wrapper">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Key_features;