'use client';

import { useUsers } from '../hooks/users/useUsers';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { NotFound } from '../notfound/NotFound';
import { TableBody } from '../table/TableBody';
import { TableHeader } from '../table/TableHeader';
import { TableUser } from '../table/TableUser';
import { UserTableRow } from '../table/UserTableRow';

function UserTable() {
  const { users = [], isLoading = false } = useUsers();
  // console.log(users);
  if (isLoading) return <LoadingSpinner />;
  if (users.length === 0) return <NotFound message='No Users Found' />;
  return (
    <TableUser>
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
