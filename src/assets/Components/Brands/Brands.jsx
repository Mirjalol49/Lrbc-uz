import React from "react";
import Marquee from "react-fast-marquee";
import Aloqabank from "../../Images/Aloqabank_logo.jpg";
import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands-section">
      <Marquee
        speed={50}
        loop={0}
        className="marquee-container"
        gradient={true}
      >
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
        <img className="brands-img" src={Aloqabank} alt="aloqabank" />
      </Marquee>
    </section>
  );
};

export default Brands;