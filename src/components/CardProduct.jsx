import "./CardProduct.css";
// import propTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const CardProduct = ({ title, price, img }) => {
  return (
    <div className="cardProduct">
      <div className="cardProduct__img">
        <img src={img} alt={title} />
      </div>
      <h3 className="cardProduct__price cardProduct__position">{price}</h3>
      <h1 className="cardProduct__title cardProduct__position">{title}</h1>
    </div>
  );
};

// CardProduct.propTypes = {
//   title: propTypes.string.isRequired,
//   price: propTypes.string.isRequired,
//   img: propTypes.any.isRequired,
// };

export default CardProduct;
