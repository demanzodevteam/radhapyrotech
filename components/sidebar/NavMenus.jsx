import Navlink from './Navlink';

function NavMenus() {
  return (
    <ul className='flex flex-col gap-8'>
      <Navlink href='/dashboard/categories'>Categories</Navlink>
      <Navlink href='/dashboard/products'>Products</Navlink>
      <Navlink href='/dashboard/orders'>Orders</Navlink>
      <Navlink href='/dashboard/users'>Users</Navlink>
    </ul>
  );
}

export default NavMenus;
