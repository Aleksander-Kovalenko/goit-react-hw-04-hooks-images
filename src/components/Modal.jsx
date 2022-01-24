import propTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Gallery.styled";
const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    const { code } = e;

    if (code === "Escape") {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = (e) => {
    const clickToBackdrop = e.currentTarget === e.target;
    if (clickToBackdrop) this.props.onToggleModal();
  };
  render() {
    const { image, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={image} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  image: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onToggleModal: propTypes.func.isRequired,
};
