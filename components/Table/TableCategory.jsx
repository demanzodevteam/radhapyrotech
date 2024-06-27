import { CategoryPagination } from '../pagination/categories/CategoryPagination';

function TableCategory({ children, count }) {
  return (
    <section className='container mx-auto '>
      <div className='w-full  overflow-hidden rounded-t shadow dark:border dark:border-gray-600 dark:border-solid'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full bg-white dark:bg-gray-800'>{children}</table>
        </div>
      </div>
      <CategoryPagination count={count} />
    </section>
  );
}

export { TableCategory };
