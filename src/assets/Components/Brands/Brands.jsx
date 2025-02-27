import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Aloqabank from "../../Images/AloqaBank_logo.jpg";
import Bank from "../../Images/bank.png";
import Bojxona from "../../Images/bojxona.jpg";
import Itpark from "../../Images/itpark.png";
import Gvardiya from "../../Images/Milliygvardiya.png";
import Neft from "../../Images/neft.jpeg";
import Nika from "../../Images/nika.png";
import "./Brands.css";

const Brands = () => {
  const [gradient, setGradient] = useState(true);

  // Check screen size and update gradient dynamically
  useEffect(() => {
    const handleResize = () => {
      setGradient(window.innerWidth > 768); // Enable gradient only for screens wider than 768px
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="brands-section">
      <Marquee 
        speed={50} 
        loop={0} 
        className="marquee-container" 
        gradient={gradient} 
        style={{ overflow: "hidden" }} // Prevents unwanted scrolling
      >
        <img className="brands-img" src={Aloqabank} alt="Aloqabank" />
        <img className="brands-img" src={Bank} alt="Bank" />
        <img className="brands-img" src={Bojxona} alt="Bojxona" />
        <img className="brands-img" src={Itpark} alt="Itpark" />
        <img className="brands-img" src={Aloqabank} alt="Aloqabank" />
        <img className="brands-img" src={Gvardiya} alt="Gvardiya" />
        <img className="brands-img" src={Neft} alt="Neft" />
        <img className="brands-img" src={Nika} alt="Nika" />
      </Marquee>
    </section>
  );
};

export default Brands;