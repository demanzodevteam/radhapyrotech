"use client";
import { useOrderFilter } from "@/app/Context/OrderContext/OrderContextProvider";
import { Modal } from "../modal/Modal";
import ShowProducts from "./ShowProducts";
import { Invoice } from "./Invoice";

const OrderModal = () => {
  const { orderModal, closeModal } = useOrderFilter();
  return (
    <div
      className={`${
        orderModal.isVisible ? "block" : "hidden"
      } backdrop-blur-md h-screen`}
      onClick={closeModal}
    >
      <Modal className={`${orderModal.isVisible ? "block" : "hidden"}`}>
        {orderModal.type === "products" ? (
          <ShowProducts productData={orderModal.data} />
        ) : (
          <Invoice order={orderModal.data} />
        )}
      </Modal>
    </div>
  );
};

export default OrderModal;
