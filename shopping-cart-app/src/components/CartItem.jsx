import React from "react";
import { useCart } from "../contexts/CartProvider";

export function CartItem({ id, title, price, img, quantity }) {
  const { increaseQty, decreaseQty, removeItemFromCart } = useCart();

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid gray",
      }}
    >
      <p>id:{id}</p>
      <p>title:{title}</p>
      <p>
        price:{price} * {quantity} = {price * quantity}
      </p>
      <p>img:{img}</p>
      <p>quantity:{quantity}</p>
      <button
        onClick={() => {
          increaseQty(id);
        }}
      >
        Increase Quantity
      </button>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          decreaseQty(id);
        }}
      >
        Decrease Quantity
      </button>
      <button
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}
