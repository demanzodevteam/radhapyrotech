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
  console.log(data);
  return (
    <div
      className={`grid grid-cols-[2.5rem_2.5rem_5rem_1fr_3rem_3rem_auto_auto_auto_auto_auto] gap-5 dark:bg-gray-700  dark:text-white text-gray-800 text-sm bg-white px-3 py-2`}
    >
      <div>{id}</div>
      <div>{product_code}</div>
      <div>{product_image}</div>
      <div>{product_name}</div>
      <div>{product_piece}</div>
      <div>{product_box}</div>
      <div>{product_reqular_price}</div>
      <div>{product_selling_price}</div>
      <div>{product_status}</div>
      <div></div>
    </div>
  );
}

export { TableRow };
