import { NotFound } from '@/components';

function TableBody({ data, render }) {
  if (!data.length) return <NotFound />;
  return <tbody className='py-4'>{data?.map(render)}</tbody>;
}

export { TableBody };
