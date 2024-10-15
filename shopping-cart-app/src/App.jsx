import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { CartProvider } from "./contexts/CartProvider";

export function App() {
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
}
