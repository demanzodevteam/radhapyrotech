import { HiPencilAlt } from 'react-icons/hi';
import { CategoryPopupModal } from '../modal/CategoryPopupModal';
import { UpdateCategoryForm } from './UpdateCategoryForm';

function UpdateCategory({ updateCategory }) {
  return (
    <>
      <div className='flex justify-end'>
        <CategoryPopupModal>
          <CategoryPopupModal.Open openKey='updatecategory'>
            <HiPencilAlt className='text-2xl  cursor-pointer dark:hover:text-green-500 text-green-600 hover:text-green-500 dark:text-green-600' />
          </CategoryPopupModal.Open>
          <CategoryPopupModal.Window openWindow='updatecategory'>
            <UpdateCategoryForm updateCategory={updateCategory} />
          </CategoryPopupModal.Window>
        </CategoryPopupModal>
      </div>
    </>
  );
}

export { UpdateCategory };
