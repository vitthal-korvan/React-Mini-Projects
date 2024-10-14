import { products } from "../data/products.js";
import { Product } from "./Product";
export function Products() {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
}
