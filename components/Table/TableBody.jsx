import { TableNotFound } from './TableNotFound';

function TableBody({ data, render }) {
  if (!data.length) return <TableNotFound message='No products found' />;
  return <tbody className='py-4'>{data?.map(render)}</tbody>;
}

export { TableBody };
