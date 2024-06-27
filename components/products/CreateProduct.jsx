'use client';

import { PopupModal } from '../modal/PopupModal';
import { CreateProductForm } from './CreateProductForm';

function CreateProduct() {
  return (
    <>
      <div className='flex justify-end'>
        <PopupModal>
          <PopupModal.Open openKey='addproduct'>
            <button className='px-4 py-[10px] bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'>
              Add Product +
            </button>
          </PopupModal.Open>
          <PopupModal.Window openWindow='addproduct'>
            <CreateProductForm />
          </PopupModal.Window>
        </PopupModal>
      </div>
    </>
  );
}

export { CreateProduct };
