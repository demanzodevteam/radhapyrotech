function TableHeader({ children }) {
  return (
    <div
      role='rowheader'
      className={`grid grid-cols-[2.5rem_2.5rem_5rem_1fr_3rem_3rem_auto_auto_auto_auto_auto] gap-5 dark:bg-gray-800 border-slate-400 border-b border-solid dark:text-white text-gray-800 text-sm bg-gray-100 px-3 py-2`}
    >
      {children}
    </div>
  );
}

export { TableHeader };
