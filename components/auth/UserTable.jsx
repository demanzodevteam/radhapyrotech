'use client';

import { useUsers } from '../hooks/users/useUsers';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { NotFound } from '../notfound/NotFound';
import { TableBody } from '../table/TableBody';
import { TableHeader } from '../table/TableHeader';
import { TableUser } from '../table/TableUser';
import { UserTableRow } from '../table/UserTableRow';

function UserTable() {
  const { data: { users = [], totalusers = 0 } = {}, isLoading = false } =
    useUsers();

  // console.log(users, totalusers);
  if (isLoading) return <LoadingSpinner />;
  if (users.length === 0 || users.length === undefined)
    return <NotFound message='No Users Found' />;
  return (
    <TableUser count={totalusers}>
      <TableHeader>
        <th className='px-3 py-2'>Name</th>
        <th className='px-3 py-2'>Email</th>
        <th className='px-3 py-2'>Role</th>
        <th className='px-3 py-2'>Actions</th>
      </TableHeader>
      <TableBody
        data={users}
        render={(user) => <UserTableRow key={user.id} data={user} />}
      />
    </TableUser>
  );
}

export { UserTable };
