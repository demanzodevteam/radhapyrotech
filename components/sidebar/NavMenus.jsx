import Navlink from './Navlink';
import { BsHouseDashFill } from 'react-icons/bs';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaLayerGroup } from 'react-icons/fa6';
import { FaUsersGear } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

function NavMenus() {
  // const session = getServerSession(authOptions);
  const { data } = useSession();
  const { role } = data?.user ?? {};
  return (
    <ul className='flex flex-col gap-8 dark:text-white'>
      <Navlink icon={<BsHouseDashFill />} href='/dashboard'>
        Dashboard
      </Navlink>
      <Navlink icon={<TbCategoryPlus />} href='/dashboard/categories'>
        Categories
      </Navlink>
      <Navlink icon={<FaLayerGroup />} href='/dashboard/products'>
        Products
      </Navlink>
      <Navlink icon={<FaCalendarAlt />} href='/dashboard/orders'>
        Orders
      </Navlink>
      {role === 'Admin' && (
        <Navlink icon={<FaUsersGear />} href='/dashboard/users'>
          Users
        </Navlink>
      )}
    </ul>
  );
}

export default NavMenus;
