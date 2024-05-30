'use client';

import { CategoryTableFiltersWrapper } from '@/components/tablefilters/CategoryTableFiltersWrapper';
import { TableOperations } from '@/components/tableoperations/TableOperations';
import Link from 'next/link';

function UsersPage() {
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Users</h2>
        <CategoryTableFiltersWrapper>
          <Link
            href='/dashboard/users/addnew'
            className='px-4 py-[10px] bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
          >
            Add User +
          </Link>
        </CategoryTableFiltersWrapper>
      </TableOperations>
    </div>
  );
}

export default UsersPage;
