import React, { useState } from "react";
import cartIcon from "../assets/icon-add-to-cart.svg";
import decreaseIcon from "../assets/icon-decrement-quantity.svg";
import increaseIcon from "../assets/icon-increment-quantity.svg";

const Product = ({
  image,
  name,
  price,
  shortName,
  onAddToCart,
  quantity,
  onIncrement,
  onDecrement,
  selected,
}) => {
  const [hovering, setHovering] = useState(false);

  const productClasses = `product ${selected ? "highlighted" : ""} ${
    hovering ? "hovering" : ""
  }`;

  return (
    <div
      className="product"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="img-btn">
        <img src={image} alt={name} />
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={onAddToCart}>
            <img src={cartIcon} alt="Add to Cart" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <img
              src={decreaseIcon}
              className="decrement-btn"
              onClick={onDecrement}
            />

            <span className="quantity-btn">{quantity}</span>

            <img
              src={increaseIcon}
              className="increment-btn"
              onClick={onIncrement}
            />
          </div>
        )}
      </div>
      <div className="label">
        <p className="short-name">{shortName}</p>
        <h3 className="name">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
