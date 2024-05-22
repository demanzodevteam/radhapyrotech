function Table({ children }) {
  return (
    <section className='container mx-auto '>
      <div className='w-full mb-8 overflow-hidden rounded shadow dark:border dark:border-gray-600 border-solid'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full bg-white dark:bg-gray-800'>{children}</table>
        </div>
      </div>
    </section>
  );
}

export { Table };
