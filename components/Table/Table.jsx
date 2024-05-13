function Table({ children }) {
  return (
    <div
      role='table'
      className='border border-solid border-slate-400 rounded overflow-scroll md:overflow-hidden bg-white dark:bg-gray-600'
    >
      {children}
    </div>
  );
}

export { Table };
