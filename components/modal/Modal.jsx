import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ isVisible, children, onClose, className }) => {
  const [modalVisible, setModalVisible] = useState(isVisible);

  const closeModal = () => {
    setModalVisible(false);
    onClose();
  };

  return (
    <div className={isVisible ? `block ${className}` : `hidden ${className}`}>
      <div className="modal">
        <div className="p-4 grid place-content-end">
          <button onClick={closeModal}>
            <IoIosCloseCircle className="text-[1.5rem]" />
          </button>
        </div>
        <div className="md:px-24 pb-8 pt-4">{children}</div>
      </div>
    </div>
  );
};

export { Modal };
