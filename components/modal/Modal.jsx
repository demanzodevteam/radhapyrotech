import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useOrderFilter } from "@/app/Context/OrderContext/OrderContextProvider";

const Modal = ({ children, className }) => {
  const { closeModal } = useOrderFilter();

  return (
    <div className={`${className}`}>
      <div className="modal h-[89.5%]">
        <div className="p-4 grid place-content-end">
          <button onClick={closeModal}>
            <IoIosCloseCircle className="text-[1.5rem]" />
          </button>
        </div>
        <div className="md:px-24 pb-8 pt-4 overflow-y-scroll h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
