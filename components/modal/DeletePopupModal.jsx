'use client';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiMiniXMark } from 'react-icons/hi2';

const DeletePopupModalContext = createContext();

function DeletePopupModal({ children }) {
  const [showModal, setshowModal] = useState('');
  const closeModal = () => setshowModal('');
  const openModal = setshowModal;
  return (
    <DeletePopupModalContext.Provider
      value={{
        showModal,
        closeModal,
        openModal,
      }}
    >
      {children}
    </DeletePopupModalContext.Provider>
  );
}

function Open({ children, openKey }) {
  const { openModal } = useContext(DeletePopupModalContext);
  return (
    <div>{cloneElement(children, { onClick: () => openModal(openKey) })}</div>
  );
}

function Window({ children, openWindow }) {
  const { showModal, closeModal } = useContext(DeletePopupModalContext);

  if (showModal !== openWindow) return null;
  return createPortal(
    <div className='fixed top-0 left-0 w-full min-h-screen z-[1000] backdrop-blur-modal-blur bg-white/10 transition-all'>
      <div className='absolute overflow-y-auto top-0 shadow right-0 bottom-0 h-full w-[100%] md:w-[65%] bg-gray-50 dark:bg-gray-800  p-3 transition-all'>
        <button
          onClick={closeModal}
          className='hover:bg-primary hover:bg-opacity-90 text-white bg-primary   bg-none border-none p-2 rounded absolute top-2 right-8 transition-all translate-x-3 text-xl'
        >
          <HiMiniXMark />
        </button>
        <div className='pt-8 p-6'>
          {cloneElement(children, { onCloseModal: closeModal })}
        </div>
      </div>
    </div>,
    document.body
  );
}

DeletePopupModal.Open = Open;
DeletePopupModal.Window = Window;

export { DeletePopupModal };
