function Select({
  filterName,
  render,
  optionsData,
  value,
  onChange,
  loading,
  firstLabel,
  notfoundText,
  defaultValue,
}) {
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
      <select
        id={filterName}
        className='px-3 appearance-auto text-[15px] capitalize outline-none py-[10px] rounded border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-900 shadow-sm'
        value={value}
        onChange={onChange}
      >
        <option value={defaultValue}>{firstLabel}</option>
        {loading
          ? null
          : optionsData.length > 0
          ? optionsData.map(render)
          : notfoundText && <option>{notfoundText}</option>}
      </select>
    </div>
  );
}

export { Select };
