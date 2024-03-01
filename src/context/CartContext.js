"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./cartContext.module.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToAdd, setItemToAdd] = useState(null);

  const router = useRouter;

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    id,
    name,
    title,
    description,
    price,
    color,
    size = "",
    quantity = 1,
    image,
  }) => {
    const item = {
      id,
      name,
      title,
      description,
      price,
      color,
      size,
      quantity,
      image,
    };

    if (!Array.isArray(cart.cartItems)) {
      cart.cartItems = [];
    }

    const isItemExist = cart?.cartItems?.find((i) => i.id === item.id);

    if (isItemExist) {
      setItemToAdd(item);
      setShowConfirmation(true);
    } else {
      const newCartItems = [...cart?.cartItems, item];
      localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
      setCartToState();
    }
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const handleConfirmation = (confirmed) => {
    setShowConfirmation(false);
    if (confirmed && itemToAdd) {
      const existingIndex = cart.cartItems.findIndex(
        (i) => i.id === itemToAdd.id
      );
      if (existingIndex !== -1) {
        const newCartItems = [...cart.cartItems];
        newCartItems[existingIndex] = itemToAdd;
        localStorage.setItem(
          "cart",
          JSON.stringify({ cartItems: newCartItems })
        );
        setCartToState();
      } else {
        const newCartItems = [...cart.cartItems, itemToAdd];
        localStorage.setItem(
          "cart",
          JSON.stringify({ cartItems: newCartItems })
        );
        setCartToState();
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart }}>
      {children}
      {showConfirmation && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <p className={styles.message}>
              Are you sure you want to change the product which is already in
              your cart?
            </p>
            <div className={styles.btnContainer}>
              <button
                className={styles.yesBtn}
                onClick={() => handleConfirmation(true)}
              >
                Yes
              </button>
              <button
                className={styles.noBtn}
                onClick={() => handleConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

export default CartContext;
