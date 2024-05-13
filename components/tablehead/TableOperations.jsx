function TableOperations({ children, headingText }) {
  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-medium'>{headingText}</h2>
      <div>{children}</div>
    </div>
  );
}

export default TableOperations;
