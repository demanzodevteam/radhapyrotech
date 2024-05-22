'use client';

import { Select } from '@/components/Elements/Select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function CategoryShowEntriesFilter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const currentEntries = searchParams.get('categoryentries') ?? 'default';

  function handleEntries(e) {
    const params = new URLSearchParams(searchParams);
    params.set('categoryentries', e.target.value);
    params.set('categorypage', 1);
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <Select
      filterName='Show Entries'
      firstLabel='default'
      defaultValue='default'
      onChange={handleEntries}
      value={currentEntries}
      optionsData={[
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
      render={(status) => (
        <option key={status.label} value={status.value}>
          {status.label}
        </option>
      )}
    />
  );
}

export { CategoryShowEntriesFilter };
