import React from "react";

const Modal = props => {
  const { isOpen, onClose, children } = props;

  const onClickOuter = () => {
    onClose();
  };

  const outerStyles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    filter: isOpen ? "opacity(1)" : "opacity(0)",
    background: "rgba(0, 0, 0, 0.5)",
    pointerEvents: isOpen ? "auto" : "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "filter 200ms",
    zIndex: '10000',
    top: '0',
    left: '0'
  };

  return (
    <div style={outerStyles} onClick={onClickOuter}>
      {children}
    </div>
  );
};

export default Modal;
