import { cn } from 'clsx-tailwind-merge';

function Stat({ iconBG, icon, label, value }) {
  return (
    <div className='border-gray-300 grid justify-center gap-x-2 items-center grid-cols-[4rem_1fr] bg-white dark:bg-gray-900 py-2 px-4 rounded-md shadow-sm'>
      <div
        className={cn(
          'h-12 w-12 rounded-full flex items-center justify-center text-xl text-white',
          iconBG ? iconBG : 'bg-primary'
        )}
      >
        {icon}
      </div>
      <div className=''>
        <h5 className='text-base font-semibold text-gray-500 dark:text-gray-400'>{label}</h5>
        <h3 className='text-2xl font-bold dark:text-white text-gray-900'>{value}</h3>
      </div>
    </div>
  );
}

export { Stat };
