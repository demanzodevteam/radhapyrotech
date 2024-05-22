import { CategoryPopupModal } from '../modal/CategoryPopupModal';
import { CategoryForm } from './CategoryForm';

function CreateCategory() {
  return (
    <>
      <div className='flex justify-end'>
        <CategoryPopupModal>
          <CategoryPopupModal.Open openKey='addcategory'>
            <button className='px-4 py-[10px] bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'>
              Add Category +
            </button>
          </CategoryPopupModal.Open>
          <CategoryPopupModal.Window openWindow='addcategory'>
            <CategoryForm />
          </CategoryPopupModal.Window>
        </CategoryPopupModal>
      </div>
    </>
  );
}

export { CreateCategory };
