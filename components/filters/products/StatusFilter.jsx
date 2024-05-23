'use client';
import { Select } from '@/components/Elements/Select';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function StatusFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // current status
  const currentStatus = searchParams?.get('status') ?? 'all';

  function handleStatusChange(e) {
    const params = new URLSearchParams(searchParams);

    params.set('status', e.target.value);
    params.set('page', 1);
    router.replace(`${pathName}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <Select
      filterName='Status'
      defaultValue='all'
      firstLabel='Product Status'
      optionsData={[
        { value: true, label: 'Published' },
        { value: false, label: 'Unpublished' },
      ]}
      render={(status) => (
        <option key={status.label} value={status.value}>
          {status.label}
        </option>
      )}
      loading={false}
      value={currentStatus}
      onChange={handleStatusChange}
    />
  );
}

export { StatusFilter };
