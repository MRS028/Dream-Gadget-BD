import React from "react";
import imgModal from '../../assets/Group.png'

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white flex flex-col p-6 rounded-lg text-center space-y-3">
        <div className="items-center flex justify-center">
        <img className="w-10 h-10" src={imgModal} alt="" />
        </div>
        <h2 className="text-3xl font-bold text-green-600">Payment Successfull</h2>
        <h2 className=" font-bold opacity-65 ">Thanks for purchasing.</h2>
        <h2 className="opacity-65 font-bold ">{message}</h2>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-base-300 font-bold rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
