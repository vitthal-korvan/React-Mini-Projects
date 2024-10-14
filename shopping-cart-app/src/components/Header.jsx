import { useEffect, useState } from "react";
import { Cart } from "./Cart";
import { Modal } from "./UI/Modal";
export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(()=>{
      if(isModalOpen){
            document.documentElement.style.overflowY="hidden";
      }
      else{
            document.documentElement.style.overflowY = "scroll";
      }
  },[isModalOpen])

  return (
    <header>
      <nav>
        <h1 className="logo">Shop</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Show Cart
        </button>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}
