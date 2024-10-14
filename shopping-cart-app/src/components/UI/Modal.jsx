import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export function Modal({children, closeModal}) {
  return createPortal(
    <>
      <div className={styles.modalBackDrop} onClick={closeModal}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}
