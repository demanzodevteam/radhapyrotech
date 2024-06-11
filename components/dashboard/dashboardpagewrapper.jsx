import { getordersstats } from '@/actions/orders/action';
import { Stats } from './stats/stats';

async function Dashboardpagewrapper({ filter }) {
  const details = await getordersstats(filter);
  const {
    totalordersCount = 0,
    pendingordersCount = 0,
    canceledordersCount = 0,
    confirmordersCount = 0,
  } = details || {};
  return (
    <div className='flex flex-col gap-6'>
      <Stats
        totalordersCount={totalordersCount}
        pendingordersCount={pendingordersCount}
        confirmordersCount={confirmordersCount}
        canceledordersCount={canceledordersCount}
      />
    </div>
  );
}

export { Dashboardpagewrapper };
