import { useEffect } from "react";
import AOS from "aos";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="WhyChooseUs">
      <h3 data-aos="fade-up">WHY CHOOSE US?</h3>
      <h1 data-aos="fade-up">
        We care about details and the quality of our products
      </h1>
      <div data-aos="fade-up" className="WhyChooseUs__info">
        <span className="WhyChooseUs__info--item">
          <span className="material-symbols-outlined">search</span>
          MANUFACTURED WITH QUALITY MATERIALS
        </span>
        <span className="WhyChooseUs__info--item">
          <span>5</span>5 YEARS OF WARRANTY FOR EACH PROFUCT
        </span>
        <span className="WhyChooseUs__info--item">
          <span className="material-symbols-outlined">work</span>
          20 YEARS OF EXPERTISE
        </span>
      </div>
    </section>
  );
};

export default WhyChooseUs;
