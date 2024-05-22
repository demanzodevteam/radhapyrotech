function TableBody({ data, render }) {
  return <tbody className='py-4'>{data?.map(render)}</tbody>;
}

export { TableBody };
