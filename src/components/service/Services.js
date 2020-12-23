import React from "react";
import "./services.scss";
import clsx from "clsx";

const ourSpecializations = [
  {
    id: 1,
    title: "Architecture",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 2,
    title: "Interiopr Delsign",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 3,
    title: "Exterior Design",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 4,
    title: "Property Valuation",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 5,
    title: "3D Modeling",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 6,
    title: "Cost Estimate",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
  {
    id: 7,
    title: "Structure Analysis",
    description: `sentences developing a central
idea, called the topic. Try tence or
a group of sentences par`,
  },
];
const ourServices = [
  {
    id: 1,
    title: "Meticulous Planning",
    description: `sentences developing a central
    idea, called the topic. Try tence or
    a group of sentences par`,
  },
  {
    id: 2,
    title: "Completion on Time",
    description: `sentences developing a central
    idea, called the topic. Try tence or
    a group of sentences par`,
  },
  {
    id: 3,
    title: "Perfect Execution",
    description: `sentences developing a central
    idea, called the topic. Try tence or
    a group of sentences par`,
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: `sentences developing a central
    idea, called the topic. Try tence or
    a group of sentences par`,
  },
];
const Services = () => {
  return (
    <div className="root-services-specialization">
      <div className="container-specializations">
        <h1> Our Specializations</h1>
        <div className={clsx("container-flexbox", "flex-specializations")}>
          {ourSpecializations.map((item, index) => (
            <div className="flex-item" key={index}>
              <div className="container-specialization">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container-btn">
          <button>Show all</button>
        </div>
      </div>
      <div className="container-services">
        <h1> Our Services</h1>
        <div className={clsx("container-flexbox", "flex-services")}>
          {ourServices.map((item, index) => (
            <div className="container-service" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
