import "./Newslatter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Newslatter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="newslatter">
      <h3 data-aos="fade-up">LIMITED DEALS</h3>
      <h1 data-aos="fade-up">
        Become a member and get 10% off of your first purchase
      </h1>
      <div data-aos="fade-up" className="newslatter__email">
        <input type="email" placeholder="Enter your email here" />
        <span className="material-symbols-outlined">mail</span>
      </div>
    </div>
  );
};

export default Newslatter;
