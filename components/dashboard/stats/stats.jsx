import { Stat } from './stat';
import { FiShoppingCart } from 'react-icons/fi';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';

function Stats({
  totalordersCount,
  pendingordersCount,
  confirmordersCount,
  canceledordersCount,
}) {
  return (
    <div className='grid sm:grid-cols-1 grid-cols-2 gap-6  md:grid-cols-4'>
      <Stat
        iconBG='bg-primary'
        label='Total Orders'
        value={totalordersCount || 0}
        icon={<FiShoppingCart />}
      />
      <Stat
        iconBG='bg-blue-500'
        label='Pending Orders'
        value={pendingordersCount || 0}
        icon={<FaArrowsRotate />}
      />
      <Stat
        iconBG='bg-green-500'
        label='Confirmed Orders'
        value={confirmordersCount || 0}
        icon={<FaCheckCircle />}
      />
      <Stat
        iconBG='bg-red-500'
        label='Canceled Orders'
        value={canceledordersCount || 0}
        icon={<FaCircleXmark />}
      />
    </div>
  );
}

export { Stats };
