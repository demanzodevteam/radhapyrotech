function TableHeader({ children }) {
  return (
    <thead>
      <tr className='text-base tracking-wide text-left text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 caption-top border-b border-gray-600'>
        {children}
      </tr>
    </thead>
  );
}

export { TableHeader };
