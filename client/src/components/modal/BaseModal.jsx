import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const rootModal = document.getElementById("modal-root");

const BaseModal = ({ show, onHideModal, className, children }) => {

  const modalRef = useRef();

  const updateRef = (e) => {
    if (modalRef.current === e.target) {
      onHideModal();
    }
  };

  useEffect(() => {
    console.log(show)
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [show]);

  return (
    show &&
    ReactDOM.createPortal(
      <div
        className="flex items-center justify-center h-full overflow-y-auto w-full bg-black bg-opacity-50 fixed top-0 left-0 z-10 "
        ref={modalRef}
        onClick={updateRef}
      >
        <div className={`bg-white rounded-lg p-12 shadow-lg relative max-h-[calc(100vh-210px)] overflow-y-auto ${className} animate-[pop-up_0.1s_ease-in-out] scale-100`}>
          <FaRegTimesCircle
            className="absolute right-12 top-12 text-2xl cursor-pointer"
            onClick={onHideModal}
          />
          {children}
        </div>
      </div>,
      rootModal
    )
  );
}

export default BaseModal;