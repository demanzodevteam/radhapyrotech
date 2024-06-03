import { MdDelete } from 'react-icons/md';
import { DeletePopupModal } from '../modal/DeletePopupModal';
import { ConfirmDelete } from '../confirmdelete/ConfirmDelete';
import { useDeleteUser } from '../hooks/users/useDeleteUser';

function DeleteUser({ userName, userId }) {
  const { deleteFunc, isPending } = useDeleteUser();

  function handleDeleteuser() {
    // trigger the function user deletion
    deleteFunc(userId);
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
            onConfirm={handleDeleteuser}
            resource={userName}
          />
        </DeletePopupModal.Window>
      </DeletePopupModal>
    </>
  );
}

export { DeleteUser };
