import { getordersstats } from '@/actions/orders/action';
import { Stats } from './stats/stats';
import { SalesChart } from './salesChart';

async function Dashboardpagewrapper({ filter }) {
  const details = await getordersstats(filter);
  const {
    totalordersCount = 0,
    pendingordersCount = 0,
    canceledordersCount = 0,
    confirmordersCount = 0,
    totalrecentorders = {},
  } = details || {};
  // console.log(totalrecentorders);
  const { numofdays = '', orders = [] } = totalrecentorders ?? {};
  return (
    <div className='flex flex-col gap-9'>
      <Stats
        totalordersCount={totalordersCount}
        pendingordersCount={pendingordersCount}
        confirmordersCount={confirmordersCount}
        canceledordersCount={canceledordersCount}
      />
      {orders.length !== 0 && (
        <SalesChart orders={orders} numofdays={numofdays} />
      )}
    </div>
  );
}

export { Dashboardpagewrapper };
