'use client';

import { cn } from 'clsx-tailwind-merge';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function Dashboardfilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //   active filter
  const activeFilter = searchParams?.get('last') ?? '7';
//   console.log(activeFilter);

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('last', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className='flex gap-x-1 p-1 bg-white rounded-md shadow-sm dark:bg-gray-900'>
      <Button
        filter='7'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 7 days
      </Button>
      <Button
        filter='30'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 30 days
      </Button>
      <Button
        filter='90'
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Last 90 days
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      disabled={filter === activeFilter}
      className={cn(
        'px-2 py-1 text-base font-semibold hover:bg-primary-700 rounded-md',
        {
          'bg-primary text-white': filter === activeFilter,
        }
      )}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export { Dashboardfilter };
