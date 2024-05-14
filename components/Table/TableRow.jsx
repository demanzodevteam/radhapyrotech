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
    <tr class='text-gray-700 text-sm dark:text-white'>
      <td class='px-4 py-3 max-w-4 w-4 border dark:border-gray-600'>
        <div>{id}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_code}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_image}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_name}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_piece}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_box}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_reqular_price}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_selling_price}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'>
        <div>{product_status}</div>
      </td>
      <td class='px-4 py-3  border dark:border-gray-600'></td>
    </tr>
  );
}

export { TableRow };
