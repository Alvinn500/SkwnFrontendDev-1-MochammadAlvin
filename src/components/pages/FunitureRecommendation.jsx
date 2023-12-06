import "./FunitureRecommendation.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FunitureRecommendation = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="furnitureRecommendation">
      <div className="furnitureRecommendation__img" data-aos="fade-right">
        <img src="/furniture-1.png" alt="Funiture" />
        <img src="/furniture-2.png" alt="Funiture" />
        <img src="/furniture-3.png" alt="Funiture" />
      </div>
      <div className="furnitureRecommendation__text" data-aos="fade-left">
        <h3>Categories</h3>
        <h1>Furniture Sets Recommendations</h1>
        <div className="furinitureRecommendation__text__card">
          <h2>Bedroom</h2>
        </div>
        <div className="furnitureRecommendation__text__card-active">
          <h2>Living Room</h2>
          <p>
            Enjoy a great living room aesthetics with your family Designs
            created for increased comfortability
          </p>
        </div>
        <div className="furinitureRecommendation__text__card">
          <h2>Home Office</h2>
        </div>
        <div className="furinitureRecommendation__text__card">
          <h2>Gaming Room</h2>
        </div>
      </div>
    </section>
  );
};

export default FunitureRecommendation;
