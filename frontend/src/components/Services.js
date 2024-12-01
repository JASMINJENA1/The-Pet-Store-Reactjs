import React from "react";
import "./Services.css";
import petGrooming from "./1-900x600-1-900x600-1-900x600.jpg";
import petBoarding from "./petboarding.jpg"
import petAdoption from "./premium_photo-1664300965124-5919ac08340f.jpeg"

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service">
          <h3>Pet Grooming</h3>
          <img src={petGrooming} alt="Pet Grooming"  height={150} width={180}></img>
          <p>Top-notch grooming services for your furry friends.</p>
        </div>
        <div className="service">
          <h3>Pet Boarding</h3>
          <img src={petBoarding} alt="Pet Grooming"  height={150} width={180}></img>
          <p>A cozy and safe stay for your pets.</p>
        </div>
        <div className="service">
          <h3>Pet Adoption</h3>
          <img src={petAdoption} alt="Pet Grooming"  height={150} width={180}></img>
          <p>Find your next family member here.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
