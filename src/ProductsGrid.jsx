import React, { useState } from "react";
import { useEffect } from "react";
import Product from "./components/product";
import image1Desktop from "./assets/image-waffle-desktop.jpg";
import image2Desktop from "./assets/image-creme-brulee-desktop.jpg";
import image3Desktop from "./assets/image-macaron-desktop.jpg";
import image4Desktop from "./assets/image-tiramisu-desktop.jpg";
import image5Desktop from "./assets/image-baklava-desktop.jpg";
import image6Desktop from "./assets/image-meringue-desktop.jpg";
import image7Desktop from "./assets/image-cake-desktop.jpg";
import image8Desktop from "./assets/image-brownie-desktop.jpg";
import image9Desktop from "./assets/image-panna-cotta-desktop.jpg";

import image1Mobile from "./assets/image-waffle-mobile.jpg";
import image2Mobile from "./assets/image-creme-brulee-mobile.jpg";
import image3Mobile from "./assets/image-macaron-mobile.jpg";
import image4Mobile from "./assets/image-tiramisu-mobile.jpg";
import image5Mobile from "./assets/image-baklava-mobile.jpg";
import image6Mobile from "./assets/image-meringue-mobile.jpg";
import image7Mobile from "./assets/image-cake-mobile.jpg";
import image8Mobile from "./assets/image-brownie-mobile.jpg";
import image9Mobile from "./assets/image-panna-cotta-mobile.jpg";

import image1Tablet from "./assets/image-waffle-tablet.jpg";
import image2Tablet from "./assets/image-creme-brulee-tablet.jpg";
import image3Tablet from "./assets/image-macaron-tablet.jpg";
import image4Tablet from "./assets/image-tiramisu-tablet.jpg";
import image5Tablet from "./assets/image-baklava-tablet.jpg";
import image6Tablet from "./assets/image-meringue-tablet.jpg";
import image7Tablet from "./assets/image-cake-tablet.jpg";
import image8Tablet from "./assets/image-brownie-tablet.jpg";
import image9Tablet from "./assets/image-panna-cotta-tablet.jpg";

import emptyCart from "./assets/illustration-empty-cart.svg";
import removeIcon from "./assets/icon-remove-item.svg";
import treeIcon from "./assets/icon-carbon-neutral.svg";
import orderConfirmed from "./assets/icon-order-confirmed.svg"

const ProductsGrid = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProductImage = (id) => {
    if (screenWidth <= 768) {
      switch (id) {
        case 1: return image1Mobile;
        case 2: return image2Mobile;
        case 3: return image3Mobile;
        case 4: return image4Mobile;
        case 5: return image5Mobile;
        case 6: return image6Mobile;
        case 7: return image7Mobile;
        case 8: return image8Mobile;
        case 9: return image9Mobile;
        default: return image1Mobile;
      }
    } else if (screenWidth <= 1366) {
      switch (id) {
        case 1: return image1Tablet;
        case 2: return image2Tablet;
        case 3: return image3Tablet;
        case 4: return image4Tablet;
        case 5: return image5Tablet;
        case 6: return image6Tablet;
        case 7: return image7Tablet;
        case 8: return image8Tablet;
        case 9: return image9Tablet;
        default: return image1Tablet;
      }
    } else {
      // Default to desktop image
      switch (id) {
        case 1: return image1Desktop;
        case 2: return image2Desktop;
        case 3: return image3Desktop;
        case 4: return image4Desktop;
        case 5: return image5Desktop;
        case 6: return image6Desktop;
        case 7: return image7Desktop;
        case 8: return image8Desktop;
        case 9: return image9Desktop;
        default: return image1Desktop;
      }
    }
  };

  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Waffle with Berries",
      
      price: 6.5,
      shortName: "Waffle",
    },
    {
      id: 2,
      name: "Vanilla Bean Creme Brulee",
      
      price: 7.0,
      shortName: "Creme Brulee",
    },
    {
      id: 3,
      name: "Macaron Mix of Five",
      
      price: 8.0,
      shortName: "Macaron",
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      
      price: 5.5,
      shortName: "Tiramisu",
    },
    {
      id: 5,
      name: "Pistachio Baklava",
      
      price: 4.0,
      shortName: "Baklava",
    },
    {
      id: 6,
      name: "Lemon Meringue Pie",
      
      price: 5.0,
      shortName: "Pie",
    },
    {
      id: 7,
      name: "Red Velvet Cake",
      
      price: 4.5,
      shortName: "Cake",
    },
    {
      id: 8,
      name: "Salted Caramel Brownie",
      
      price: 5.5,
      shortName: "Brownie",
    },
    {
      id: 9,
      name: "Vanilla Panna Cotta",
     
      price: 6.5,
      shortName: "Panna",
    },
  ];
  const [storedTotal, setStoredTotal] = useState(0);
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = products.find((p) => p.id === productId);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, increment) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + increment }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove products with quantity 0
    );
  };

  const getProductQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  

  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleSelectProduct = (productId) => {
    setSelectedProducts((prev) => {
      const isSelected = prev.includes(productId);
      const updated = isSelected
        ? prev.filter((id) => id !== productId) // Remove if already selected
        : [...prev, productId]; // Add if not selected
      
      return updated;
    });
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);

  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add items to confirm your order.");
      return;
    }
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setOrderDetails(cart);
    setStoredTotal(calculatedTotal);
    setPopupVisible(true);
    setCart([]); 
  };

  return (
    <div className="grid-cart">
      <div className="grid">
        <h1>Desserts</h1>
        <div className="products-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              image={getProductImage(product.id)}
              price={product.price}
              shortName={product.shortName}
              quantity={getProductQuantity(product.id)}
              onAddToCart={() => addToCart(product.id)}
              onIncrement={() => updateQuantity(product.id, 1)}
              onDecrement={() => updateQuantity(product.id, -1)}
              selected={selectedProducts.includes(product.id)}
              onToggleSelect={() => toggleSelectProduct(product.id)}
            />
          ))}
        </div>
      </div>
      <div className="cart-box">
        <h2>Your Cart ({cart.length})</h2>
        <div className="cart">
          {cart.length === 0 ? (
            <div className="emptyCart">
              <img src={emptyCart} alt="Empty cart" />
              <p>Your added items will appear here</p>
            </div>
          ) : (
            <div>
              <ul>
                {cart.map((item) => (
                  <span>
                    <li key={item.id}>
                      <span className="added-info">
                        {item.name}{" "}
                        <p>
                          <span className="quantity">{item.quantity}x</span>{" "}
                          <span className="actual-price">@ ${item.price} </span>
                          <span className="quantity-price">
                            ${item.price * item.quantity}
                          </span>
                        </p>
                      </span>
                      <img
                        src={removeIcon}
                        alt="Remove"
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                      />
                    </li>
                    <hr />
                  </span>
                ))}
              </ul>
              <div className="total">
                <span className="order-total">Order Total</span>{" "}
                <span className="total-price">${calculatedTotal.toFixed(2)}</span>
              </div>
              <p className="note">
                <img src={treeIcon} />
                This is a <bold>carbon nuetral</bold> delivery
              </p>
              <button className="confirm-order" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <img src={orderConfirmed}alt="Check" />{" "}
              {/* Replace with your icon */}
              <h2>Order Confirmed</h2>
              <p>We hope you enjoy your food!</p>
            </div>
            <div className="popup-body">
              <ul>
                {orderDetails.map((item) => (
                  <li key={item.id} className="order-item">
                    <img src={getProductImage(item.id)} alt={item.name} />
                    <div className="item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-quantity">
                        {item.quantity}x @ ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="item-price">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="order-total">
                <p>Order Total</p>
                <p>${storedTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="popup-footer">
              <button
                className="new-order-btn"
                onClick={() => setPopupVisible(false)}
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
