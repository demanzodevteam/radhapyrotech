function TableRow({ data }) {
  const {
    id,
    product_code,
    product_name,
    product_piece,
    product_box,
    product_reqular_price,
    product_selling_price,
    product_image,
    product_status,
  } = data ?? {};
  // console.log(data);
  return (
    <tr className='text-gray-700 text-sm dark:text-white'>
      <td className='px-4 py-3 max-w-4 w-4 border dark:border-gray-600'>
        <span>{id}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_code}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_name}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_piece}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_box}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_reqular_price}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_selling_price}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'>
        <span>{product_status}</span>
      </td>
      <td className='px-4 py-3  border dark:border-gray-600'></td>
    </tr>
  );
}

export { TableRow };
