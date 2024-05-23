function TableHeader({ children }) {
  return (
    <thead className="bg-gray-200 rounded-t dark:bg-gray-900 caption-top border border-gray-300 dark:border-gray-600 ">
      <tr className='text-sm md:text-base  tracking-wide text-left  text-gray-800 dark:text-white '>
        {children}
      </tr>
    </thead>
  );
}

export { TableHeader };
