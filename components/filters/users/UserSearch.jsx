'use client';
import { Search } from '@/components/Elements/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function UserSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // current search
  const currentSearch = searchParams.get('userbysearch') ?? '';

  // handle search
  function handleSearch(e) {
    const params = new URLSearchParams(searchParams);
    params.set('userbysearch', e.target.value);
    params.set('usersPage', 1);
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <Search
      filterName='Search'
      placeholderText='Enter The User Name'
      onChange={handleSearch}
      value={currentSearch}
    />
  );
}

export { UserSearch };
