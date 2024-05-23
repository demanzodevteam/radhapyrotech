import { Modal } from "../modal/Modal";

const ShowProducts = ({ productData }) => {
  return (
    <div className="">
      <h4 className="text-center pb-8">Products</h4>
      <table className="min-w-full">
        <thead>
          <tr className="">
            <th className="mx-4 py-2 text-left text-xs">S No.</th>
            <th className="mx-4 py-2 text-left text-xs">Product Code</th>
            <th className="mx-4 py-2 text-left text-xs">Product Name</th>
            <th className="mx-4 py-2 text-left text-xs">Individual Price</th>
            <th className="mx-4 py-2 text-left text-xs">Quantity</th>
            <th className="mx-4 py-2 text-left text-xs">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {productData.products?.map((product, index) => {
            return (
              <tr key={index} className="py-2 border-y-2">
                <td className="mx-4 py-2 text-xs ">{index + 1}</td>
                <td className="mx-4 py-2 text-xs ">{product?.product_code}</td>
                <td className="mx-4 py-2 text-xs ">{product?.product_name}</td>
                <td className="mx-4 py-2 text-xs">
                  {product?.product_selling_price}
                </td>
                <td className="mx-4 py-2 text-xs">{product?.quantity}</td>
                <td className="mx-4 py-2 text-xs">
                  {Number(product?.quantity) *
                    Number(product?.product_selling_price)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="text-center mt-14">
        Total Price : {productData.totalPrice}
      </h2>
    </div>
  );
};

export default ShowProducts;
