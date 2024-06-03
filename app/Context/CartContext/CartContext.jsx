"use client";

import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const cookieCart = Cookies.get("cart");
      return cookieCart ? JSON.parse(cookieCart) : [];
    } catch (error) {
      console.error("Error parsing cookie cart:", error);
      return [];
    }
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (totalPrice) => {
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    // Save cart to cookies whenever it changes
    Cookies.set("cart", JSON.stringify(cart));

    // Update total price
    let total = 0;
    cart.forEach((item) => {
      total += item.product_selling_price * item.quantity;
    });
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: Number(updatedCart[existingProductIndex].quantity) + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
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
          quantity: Number(updatedCart[productIndex].quantity) + 1,
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
