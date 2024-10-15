import React from "react";
import { useCart } from "../contexts/CartProvider";
import { CartItem } from "./CartItem";

export function Cart() {
  const { cart } = useCart();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h3>No Items Found!!</h3>;
  }
  return (
    <>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <h1>totalAmount:{totalAmount}</h1>
    </>
  );
}
