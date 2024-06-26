import { UsersPagination } from '../pagination/users/usersPagination';

export function TableUser({ children, count = 0 }) {
  return (
    <section className='container mx-auto '>
      <div className='w-full  overflow-hidden rounded-t shadow dark:border dark:border-gray-600 dark:border-solid'>
        <div className='w-full overflow-x-auto'>
          <table className='w-full bg-white dark:bg-gray-800'>{children}</table>
        </div>
      </div>
      <UsersPagination count={count} />
    </section>
  );
}
