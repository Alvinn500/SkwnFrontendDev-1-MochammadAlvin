import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero">
      <div className="hero__text-container" data-aos="fade-right">
        <h1>
          The kind of <span>furniture</span> you have been looking for
        </h1>
        <button className="hero__text-container__button--search">
          <span className="material-symbols-outlined">search</span>SEARCH
          CATALOG
        </button>
        <button className="hero__text-container__button--watch">
          <span className="material-symbols-outlined">play_circle</span>WATHC
          VIDEOS
        </button>
      </div>
      <div className="hero__image-container " data-aos="fade-left">
        <button className="hero__image-container__button-price">$329</button>
        <h3>Pösht Sofa</h3>
        <button className="hero__image-container__button-details">
          VIEW DETAILS{" "}
          <span className="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
