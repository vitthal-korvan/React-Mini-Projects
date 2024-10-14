import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { CartProvider } from "./contexts/CartProvider"

export function App(){
  
  return (
    <CartProvider>
      <Header />
      <h1>Hello! Vitthal</h1>
      <Products />
    </CartProvider>
  );
}