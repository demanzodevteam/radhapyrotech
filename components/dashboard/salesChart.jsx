'use client';

import useDarkMode from '@/darkmodecontext/useDarkMode';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function SalesChart({ orders, numofdays }) {
  const { isDarkMode } = useDarkMode();
  //   console.log(isDarkMode);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        // extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#fff',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        // extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numofdays - 1),
    end: new Date(),
  });
  //   console.log(allDates);

  const data = allDates?.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: orders
        .filter((order) => isSameDay(date, new Date(order.order_date)))
        .reduce((acc, cur) => Number(acc) + Number(cur.total_price), 0),
    };
  });
  //   console.log(data);

  return (
    <div>
      <h3 className='mb-6 font-semibold text-xl'>
        Sales from {format(allDates?.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates?.at(-1), 'MMM dd yyyy')}
      </h3>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data} height='100%'>
          <XAxis
            dataKey='label'
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit='₹'
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray='4' />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            type='monotone'
            dataKey='totalSales'
            // stroke='#4f46e5'
            // fill='#c7d2fe'
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            unit='₹'
            name='Total sales'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export { SalesChart };
