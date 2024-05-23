import { PopupModal } from '../modal/PopupModal';
import { HiPencilAlt } from 'react-icons/hi';
import { UpdateProductForm } from './UpdateProductForm';

function UpdateProduct({ updateProduct }) {
  return (
    <>
      <div className='flex justify-end'>
        <PopupModal>
          <PopupModal.Open openKey='addproduct'>
            <HiPencilAlt className='text-2xl  cursor-pointer dark:hover:text-green-500 text-green-600 hover:text-green-500 dark:text-green-600' />
          </PopupModal.Open>
          <PopupModal.Window openWindow='addproduct'>
            <UpdateProductForm productData={updateProduct} />
          </PopupModal.Window>
        </PopupModal>
      </div>
    </>
  );
}

export { UpdateProduct };
