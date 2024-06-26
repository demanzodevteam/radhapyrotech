import Link from 'next/link';
import { CategoryTableFiltersWrapper } from '@/components/tablefilters/CategoryTableFiltersWrapper';
import { TableOperations } from '@/components/tableoperations/TableOperations';
import { Suspense } from 'react';
import { UserTable } from '@/components/auth/UserTable';
import { LoadingSpinner } from '@/components/loadingspinner/LoadingSpinner';
import { UserSearch } from '@/components/filters/users/UserSearch';
import { UserShowEntries } from '@/components/filters/users/UserShowEntries';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function UsersPage() {
  // redirect the user , user role not match with admin
  const session = await getServerSession(authOptions);
  const { role } = session?.user ?? {};
  if (role !== 'Admin') redirect('/dashboard');
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Users</h2>
        <CategoryTableFiltersWrapper>
          <UserShowEntries />
          <UserSearch />
          <Link
            href='/dashboard/users/addnew'
            className='px-4 w-fit justify-self-end inline-block py-[10px] bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
          >
            Add User +
          </Link>
        </CategoryTableFiltersWrapper>
      </TableOperations>
      <Suspense fallback={<LoadingSpinner />}>
        <UserTable />
      </Suspense>
    </div>
  );
}

export default UsersPage;
