'use client';
import { Search } from '@/components/Elements/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function CategorySearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // current search
  const currentSearch = searchParams.get('categorysearch') ?? '';

  // handle search
  function handleSearch(e) {
    const params = new URLSearchParams(searchParams);
    params.set('categorysearch', e.target.value);
    params.set('categorypage', 1);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <Search
      filterName='Search'
      placeholderText='Enter The Category Name'
      onChange={handleSearch}
      value={currentSearch}
    />
  );
}

export { CategorySearch };
