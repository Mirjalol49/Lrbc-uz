import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Aloqabank from "../../Images/AloqaBank_logo.jpg";
import Bank from "../../Images/bank.png";
import Bojxona from "../../Images/bojxona.jpg";
import Itpark from "../../Images/itpark.png";
import Gvardiya from "../../Images/Milliygvardiya.png";
import Neft from "../../Images/neft.jpeg";
import Nika from "../../Images/nika.png";
import Company1 from "../../Images/company1.jpg";
import Company2 from "../../Images/company2.jpg";
import Company3 from "../../Images/company3.jpg";
import Company4 from "../../Images/company4.jpg";
import Company5 from "../../Images/company5.jpg";
import Company6 from "../../Images/company6.jpg";
import Company7 from "../../Images/company7.jpg";
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
        <img className="brands-img" src={Company1} alt="Company 1" />
        <img className="brands-img" src={Company2} alt="Company 2" />
        <img className="brands-img" src={Company3} alt="Company 3" />
        <img className="brands-img" src={Company4} alt="Company 4" />
        <img className="brands-img" src={Company5} alt="Company 5" />
        <img className="brands-img" src={Company6} alt="Company 6" />
        <img className="brands-img" src={Company7} alt="Company 7" />
      </Marquee>
    </section>
  );
};

export default Brands;