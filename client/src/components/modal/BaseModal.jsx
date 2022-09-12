import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FaRegTimesCircle } from "react-icons/fa";

const rootModal = document.getElementById("modal-root");

const BaseModal = ({ show, onHideModal, children }) => {

  const modalRef = useRef();

  const updateRef = (e) => {
    if (modalRef.current === e.target) {
      onHideModal();
    }
  };
ww
  useEffect(() => {
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
        className="flex items-center justify-center h-full overflow-y-auto w-full bg-black bg-opacity-50 fixed top-0 left-0 z-10"
        ref={modalRef}
        onClick={updateRef}
      >
        <div className="bg-white rounded-lg p-12 shadow-lg relative w-1/2 max-h-[calc(100vh-210px)] overflow-y-auto">
          <FaRegTimesCircle
            className="absolute right-8 top-8 text-2xl cursor-pointer"
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