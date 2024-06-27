'use client';
import { Search } from '@/components/Elements/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function ProductSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // current search
  const currentSearch = searchParams.get('search') ?? '';

  // handle search
  function handleSearch(e) {
    const params = new URLSearchParams(searchParams);
    params.set('search', e.target.value);
    params.set('page', 1);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <Search
      filterName='Search'
      placeholderText='Product code,Product Name,Product Categories'
      onChange={handleSearch}
      value={currentSearch}
    />
  );
}

export { ProductSearch };
