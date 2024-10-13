import React from "react";

export function Product({ id, title, price, img }) {
  return (
    <>
      <h3>id:{id}</h3>
      <h3>title:{title}</h3>
      <h3>price:{price}</h3>
      <img src={img} />
      <button>Add to cart</button>
    </>
  );
}
