function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  return (
    <div className='w-full max-w-full md:max-w-[25rem]  p-2   flex flex-col gap-5'>
      <h3 className='text-gray-800 text-xl md:text-2xl font-bold dark:text-white'>
        Delete {resource}
      </h3>
      <p className='text-base text-gray-600 dark:text-gray-400'>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>
      <div className='flex justify-end gap-x-4'>
        <button
          className='px-4 py-2 dark:border dark:border-solid border-gray-600 dark:bg-transparent hover:dark:bg-gray-900 bg-gray-800  hover:bg-gray-800 hover:bg-opacity-90 rounded-md text-white text-base'
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          className='px-4 py-2 bg-red-600 hover:bg-red-700  rounded-md text-white text-base'
          onClick={onConfirm}
          disabled={disabled}
        >
          {disabled ? 'Deleting...' : ' Delete'}
        </button>
      </div>
    </div>
  );
}

export { ConfirmDelete };
