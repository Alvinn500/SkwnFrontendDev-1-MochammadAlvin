import "./OurProducts.css";
import propTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurProducts = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="ourProducts">
      <div data-aos="fade-up" className="ourProducts__header">
        <div className="ourProducts__text">
          <h3>Categories</h3>
          <h2>This month’s best seller</h2>
        </div>
        <div className="ourProducts__button">
          <button>SEE MORE</button>
        </div>
      </div>
      <div data-aos="fade-up" className="ourProducts__list--products">
        {children}
      </div>
    </div>
  );
};

OurProducts.propTypes = {
  children: propTypes.node.isRequired,
};

export default OurProducts;
