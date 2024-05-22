import { DeleteProduct } from '../products/DeleteProduct';
import { UpdateProduct } from '../products/UpdateProduct';

function TableActions({ resource, productId, updateProduct }) {
  // console.log(updateProduct);
  return (
    <div className='flex justify-center gap-x-4'>
      <UpdateProduct updateProduct={updateProduct} />
      <DeleteProduct resource={resource} productId={productId} />
    </div>
  );
}

export { TableActions };
