import { useCart } from "../contexts/CartProvider";

export function Product({ id, title, price, img }) {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    for(let item of cart){
      if(item.id ===id){
        alert("item already inside cart")
        return
      }
    }

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
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid gray",
      }}
    >
      <p>id:{id}</p>
      <img
        src={img}
        style={{
          height: "200px",
          width: "200px",
        }}
      />
      <p>title:{title}</p>
      <p>price:{price}</p>

      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}
