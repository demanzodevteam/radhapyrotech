'use client';

import { PAGE_SIZE } from '@/helpers/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

export function CategoryPagination({ count }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // get current page
  const currentPage = !searchParams.get('categorypage')
    ? 1
    : Number(searchParams.get('categorypage'));

  const pageSizeParam = searchParams.get('categoryentries') || PAGE_SIZE;
  let pageSize;
  if (pageSizeParam === 'default') {
    pageSize = PAGE_SIZE;
  } else {
    pageSize = parseInt(pageSizeParam) || PAGE_SIZE;
  }

  const pageCount = Math.ceil(count / pageSize);

  const totalPages = Array.from({ length: pageCount }, (_, i) => i + 1);

  // actions
  function previousPage() {
    const previous = currentPage !== 1 ? currentPage - 1 : currentPage;
    const params = new URLSearchParams(searchParams);
    params.set('categorypage', previous);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set('categorypage', next);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  function onChangeClick(page) {
    if (currentPage === page) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set('categorypage', page);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  if (pageCount <= 1) return null;
  return (
    <div className='flex justify-between items-center p-2 bg-gray-200 dark:border-t-0 dark:bg-gray-900 border-2 border-t-0 border-gray-300  rounded-b  dark:border-gray-600 border-solid'>
      <p className='space-x-1 font-medium text-sm text-gray-900 dark:text-white'>
        showing
        <span className='inline-block px-2 font-bold'>
          {(currentPage - 1) * pageSize + 1}
        </span>
        to
        <span className='inline-block pr-2 font-bold'>
          {currentPage === pageCount ? count : currentPage * pageSize}
        </span>
        of <span className='inline-block pr-2 font-bold'>{count}</span>
        results
      </p>

      <div className='inline-flex overflow-hidden bg-gray-100 dark:bg-gray-800 '>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className='flex h-7 min-w-7 rounded-l items-center justify-center border  px-2 text-base font-medium border-gray-300 dark:border-gray-600  dark:text-white hover:bg-primary hover:text-white'
        >
          <FaArrowLeft className='text-base' />
        </button>
        <div className='hidden md:inline-flex'>
          {totalPages.map((page) => (
            <button
              key={page}
              onClick={() => onChangeClick(page)}
              className={`${
                currentPage === page ? 'bg-primary text-white border-y-0' : ''
              } flex h-7 min-w-7 items-center justify-center  border border-stroke px-2 text-base font-medium  border-gray-300 dark:border-gray-600 dark:text-white hover:bg-primary hover:text-white`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className='flex h-7 min-w-7 items-center justify-center rounded-r px-2 text-base font-medium  border border-gray-300 dark:border-gray-600 dark:text-white hover:bg-primary hover:text-white'
        >
          <FaArrowRight className='text-base' />
        </button>
      </div>
    </div>
  );
}
