'use client';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiMiniXMark } from 'react-icons/hi2';

const CategoryPopupModalContext = createContext();

function CategoryPopupModal({ children }) {
  const [showModal, setshowModal] = useState('');
  const closeModal = () => setshowModal('');
  const openModal = setshowModal;
  return (
    <CategoryPopupModalContext.Provider
      value={{
        showModal,
        closeModal,
        openModal,
      }}
    >
      {children}
    </CategoryPopupModalContext.Provider>
  );
}

function Open({ children, openKey }) {
  const { openModal } = useContext(CategoryPopupModalContext);
  return (
    <div>{cloneElement(children, { onClick: () => openModal(openKey) })}</div>
  );
}

function Window({ children, openWindow }) {
  const { showModal, closeModal } = useContext(CategoryPopupModalContext);

  if (showModal !== openWindow) return null;
  return createPortal(
    <div className='fixed top-0 p-4 md:p-0 left-0 w-full min-h-screen z-[1000] backdrop-blur-modal-blur bg-white/10 transition-all'>
      <div className='absolute  w-[90%] md:w-auto overflow-y-auto top-[50%] shadow-md translate-x-[-50%] translate-y-[-50%] left-[50%]  bg-gray-50 dark:bg-gray-800  p-2 rounded transition-all'>
        <button
          onClick={closeModal}
          className='hover:bg-primary hover:bg-opacity-90 text-white bg-primary   bg-none border-none p-1 md:p-2 rounded absolute top-4 right-4 transition-all  text-xl'
        >
          <HiMiniXMark />
        </button>
        <div className='pt-8 p-4'>
          {cloneElement(children, { onCloseModal: closeModal })}
        </div>
      </div>
    </div>,
    document.body
  );
}

CategoryPopupModal.Open = Open;
CategoryPopupModal.Window = Window;

export { CategoryPopupModal };
