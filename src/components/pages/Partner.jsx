import "./Partner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Partner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="partner" data-aos="fade-up">
      <div className="partner__text">
        <h1>25+</h1>
        <h3>PARTNERED BRANDS</h3>
      </div>
      <div className="partner__logo">
        <img src="./Company logo.png" alt="logo" />
        <img src="./Company logo-1.png" alt="logo" />
        <img src="./Company logo-2.png" alt="logo" />
        <img src="./Company logo-3.png" alt="logo" />
      </div>
    </section>
  );
};

export default Partner;
