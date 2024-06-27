function Search({ placeholderText, value, onChange, filterName }) {
  return (
    <div className='flex flex-col gap-1'>
      {filterName && (
        <label
          className='text-gray-900 text-[15px] capitalize font-medium dark:text-white'
          htmlFor={filterName}
        >
          {filterName}
        </label>
      )}
      <input
        className='px-3 appearance-auto text-[15px]  outline-none py-[10px]  rounded border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-900 shadow-sm placeholder:text-sm'
        id={filterName}
        type='search'
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
}

export { Search };
