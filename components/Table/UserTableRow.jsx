import Image from 'next/image';
import defaultProfileImage from '@/assets/profile.png';
import { cn } from 'clsx-tailwind-merge';
import { TableActions } from './TableActions';
import { DeleteUser } from '../auth/DeleteUser';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
function UserTableRow({ data = {} }) {
  const { id: userId, firstname, lastname, email, image, role } = data;
  return (
    <tr className='text-gray-900 font-medium text-sm dark:text-white'>
      <td className='px-4 whitespace-nowrap py-2  border border-gray-300 dark:border-gray-600'>
        <div className='flex items-center '>
          <div className='relative w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
            <Image
              className='rounded-full object-cover'
              src={image ? image : defaultProfileImage}
              fill={true}
              priority={true}
              width={0}
              height={0}
              sizes='100%'
              alt={`${firstname}-${lastname}`}
            />
          </div>
          <div className='font-medium capitalize'>{`${firstname} ${lastname}`}</div>
        </div>
      </td>
      <td className='px-4 py-2 border border-gray-300 dark:border-gray-600'>
        <span>{email}</span>
      </td>
      <td className='px-4 py-2  border border-gray-300 dark:border-gray-600'>
        <span
          className={cn('px-3 py-1 text-white rounded-lg bg-gray-500', {
            'bg-green-500': role === 'Admin',
            'bg-primary': role === 'Manager',
          })}
        >
          {role}
        </span>
      </td>
      <td className='px-4 py-2  border border-gray-300 dark:border-gray-600'>
        <TableActions>
          <Link href={`/dashboard/profile/${userId}`}>
            <HiPencilAlt className='text-2xl  cursor-pointer dark:hover:text-green-500 text-green-600 hover:text-green-500 dark:text-green-600' />
          </Link>
          <DeleteUser userId={userId} userName={firstname} />
        </TableActions>
      </td>
    </tr>
  );
}

export { UserTableRow };
