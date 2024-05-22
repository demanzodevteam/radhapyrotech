'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import { ConfirmDelete } from '../confirmdelete/ConfirmDelete';
import { useDeleteCategory } from '../hooks/categories/useDeleteCategory';
import { DeletePopupModal } from '../modal/DeletePopupModal';

function DeleteCategory({ resource, categoryId }) {
  // use delete category call
  const { deleteCategory, isPending } = useDeleteCategory();
  // params setting
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  // make action to delete the product
  function handleDelete() {
    const params = new URLSearchParams(searchParams);
    // trigger the function
    deleteCategory(categoryId);
    // reset the page 1
    params.set('categorypage', 1);
    router.replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <>
      <DeletePopupModal>
        <DeletePopupModal.Open openKey='delete'>
          <MdDelete className='text-2xl  cursor-pointer dark:hover:text-red-500 text-red-600 hover:text-red-500 dark:text-red-600' />
        </DeletePopupModal.Open>
        <DeletePopupModal.Window openWindow='delete'>
          <ConfirmDelete
            disabled={isPending}
            onConfirm={handleDelete}
            resource={resource}
          />
        </DeletePopupModal.Window>
      </DeletePopupModal>
    </>
  );
}

export { DeleteCategory };
