"use client";
import { useOrderFilter } from "@/app/Context/OrderContext/OrderContextProvider";
import { Modal } from "../modal/Modal";
import ShowProducts from "./ShowProducts";
import { Invoice } from "./Invoice";

const OrderModal = () => {
  const { orderModal, closeModal } = useOrderFilter();
  return (
    <div>
      <div
        className={`${
          orderModal.isVisible
            ? "left-0 top-0 z-20 block h-screen py-20 w-full fixed backdrop-blur-md "
            : "hidden"
        } `}
        onClick={closeModal}
      ></div>
      <div
        className={`${
          orderModal.isVisible
            ? "left-0 lg:left-20 w-screen lg:w-11/12 h-[80%] fixed bg-white top-16 z-20 flex justify-center items-center"
            : "hidden"
        } `}
      >
        <div className="left-0 w-full z-30 flex h-full relative">
          <Modal
            className={`${
              orderModal.isVisible
                ? "block dark:bg-[#1f2937] bg-white w-full min-h-full"
                : "hidden"
            }`}
          >
            {orderModal.type === "products" ? (
              <ShowProducts productData={orderModal.data} />
            ) : (
              <Invoice order={orderModal.data} />
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
