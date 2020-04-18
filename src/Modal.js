import React, { useEffect, useRef, useReducer } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // Basically keeps/provides the reference to an already referenced element.
  // Useful here so we don't create more than 1 modals, or remove the previously
  // created one.
  // Memory leak fix
  const elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // UseEffect if it returns a function, it is used as a "CLEANUP" function.
    // componentWillUnmount
    return () => modalRoot.removeChild(elRef.current);

    // To make it run only ONCE, pass `useEffect` an empty array (Dependencies)
  }, []);

  // Provided by react-dom
  // takes the Markup, and the reference to the element to mount to (container)
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
