import React from "react";
import { IoMdClose } from "react-icons/io";

function Modla({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`flex items-center justify-center inset-0 fixed transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-lg p-6 transition-all ${open? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
        <button onClick={onClose} className="absolute right-2 top-2 bg-gray-100 text-gray-500 hover:bg-gray-300 duration-500 rounded p-1"><IoMdClose/></button>
      {children}
      </div>
    </div>
  );
}

export default Modla;
