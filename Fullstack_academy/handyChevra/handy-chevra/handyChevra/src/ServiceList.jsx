import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const services = [
  "Electrical",
  "Plumbing",
  "Dry Wall Patchups",
  "Rubbish Removal",
  "Light Hauling",
  "Mice Proofing",
  "Appliance Installation",
  "Window Shade Installation/Repair",
  "Furniture Assembly",
  "Post Construction Touch-ups",
  "All Odds-and-Ends Jobs",
];

function ServiceList() {
  return (
    <div className="ServiceList" id="services">
      <ScrollAnimation animateIn="flip" animateOnce={true}>
        <h2 className="service__header">Our Services</h2>
      </ScrollAnimation>
      <ul>
        {services.map((service, index) => (
          <ScrollAnimation
            key={index}
            animateIn="flip"
            animateOnce={true}
            delay={index * 30}
          >
            <li>{"~ " + service}</li>
          </ScrollAnimation>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
