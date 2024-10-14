import { useCart } from "../contexts/CartProvider";

export function Product({ id, title, price, img }) {
  const { addItemToCart } = useCart();
  function handleAdd() {
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
  }
  return (
    <>
      <h3>id:{id}</h3>
      <h3>title:{title}</h3>
      <h3>price:{price}</h3>
      <img src={img} />
      <button onClick={handleAdd}>Add to cart</button>
    </>
  );
}
