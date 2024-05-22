import { CategoryPopupModal } from '../modal/CategoryPopupModal';
import { CreateCategoryForm } from './CategoryForm';

function CreateCategory() {
  return (
    <>
      <div className='flex justify-end'>
        <CategoryPopupModal>
          <CategoryPopupModal.Open openKey='addproduct'>
            <button className='px-4 py-[10px] bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'>
              Add Category +
            </button>
          </CategoryPopupModal.Open>
          <CategoryPopupModal.Window openWindow='addproduct'>
            <CreateCategoryForm />
          </CategoryPopupModal.Window>
        </CategoryPopupModal>
      </div>
    </>
  );
}

export { CreateCategory };

