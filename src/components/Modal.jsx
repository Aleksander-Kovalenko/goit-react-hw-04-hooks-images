import propTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Gallery.styled";
const modalRoot = document.querySelector("#modal-root");

export function Modal({ onToggleModal, image, tags }) {
  useEffect(() => {   
    window.addEventListener("keydown", handleKeydown);

    function handleKeydown (e) {
          if (e.code === "Escape") {
       return onToggleModal();
      }
      else if(e.currentTarget === e.target){
        return onToggleModal()
      }
    };  
    return ()=>{
    window.removeEventListener('keydown', handleKeydown)
  }
  });
  
  const handleBackdropClick = (e) => {
    const clickToBackdrop = e.currentTarget === e.target;
    if (clickToBackdrop) return onToggleModal();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={image} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  image: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onToggleModal: propTypes.func.isRequired,
};
