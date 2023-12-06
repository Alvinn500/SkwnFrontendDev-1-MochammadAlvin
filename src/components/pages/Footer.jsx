import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__desk">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
          <h1>Dekor</h1>
        </div>
        <p>
          Dekoor is a furniture company created to fulfill the needs of family
          with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of
          our design is comfortability.
        </p>
        <h2>&copy;Copyright 2022 Dekor</h2>
      </div>
      <div className="footer__list-info">
        <div className="footer__list-info__support">
          <h1>Support</h1>
          <p>FAQ</p>
          <p>Shipping & Returns</p>
          <p>Care guide</p>
          <p>Redeem warranty</p>
        </div>
        <div className="footer__list-info__social-media">
          <h1>Social Media</h1>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>TikTok</p>
        </div>
        <div className="footer__list-info__aboutUs">
          <h1>About Us</h1>
          <p>Our story</p>
          <p>Designer</p>
          <p>Craftmanship</p>
          <p>Sustainability</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
