"use client";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const products = [
  {
    id: 1,
    product_code: "P001",
    product_name: "Product 1",
    product_selling_price: 24.95,
    product_regular_price: 29.95,
    quantity: 2,
    product_image_url: "https://via.placeholder.com/500",
  },
  {
    id: 2,
    product_code: "P002",
    product_name: "Product 2",
    product_selling_price: 49.95,
    product_regular_price: 59.95,
    quantity: 1,
    product_image_url: "https://via.placeholder.com/500",
  },
  {
    id: 3,
    product_code: "P003",
    product_name: "Product 3",
    product_selling_price: 19.95,
    product_regular_price: 24.95,
    quantity: 3,
    product_image_url: "https://via.placeholder.com/500",
  },
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(products);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (totalPrice) => {
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product_selling_price * item.quantity;
    });
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity + 1,
        };
      }
      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: Math.max(updatedCart[productIndex].quantity - 1, 1),
        };
      }
      return updatedCart;
    });
  };
  const inputQuantity = (productId, value) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: value,
        };
      }
      return updatedCart;
    });
  };
  const resetCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        updateTotalPrice,
        inputQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
