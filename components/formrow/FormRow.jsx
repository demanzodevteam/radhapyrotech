function FormRow({ label, children, error }) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label
          className='text-gray-800 dark:text-white text-base'
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className='text-red-500 text-sm font-normal'>{error}</span>
      )}
    </div>
  );
}

export { FormRow };
