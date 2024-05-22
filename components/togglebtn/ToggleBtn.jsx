'use client';
import { useState } from 'react';
import { useChangeProductStatus } from '../hooks/products/useChangeProductStatus';

function ToggleBtn({ currentStatus, productId }) {
  const [isChecked, setIsChecked] = useState(currentStatus);
  const { isPending, updateProductStatus } = useChangeProductStatus();

  const handleCheckboxChange = () => {
    setIsChecked((isChecked) => !isChecked);

    // make update product status
    updateProductStatus({
      id: productId,
      product_status: !isChecked,
    });
  };

  // console.log(isChecked, productId);

  return (
    <>
      <label className='flex cursor-pointer select-none justify-center items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            disabled={isPending}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`block h-6 w-10 rounded-full ${
              isChecked ? 'bg-primary' : 'bg-slate-400'
            }`}
          ></div>
          <div
            className={`dot absolute ${
              isChecked ? 'right-1' : 'left-1'
            } top-1 h-4 w-4 rounded-full bg-white transition`}
          ></div>
        </div>
      </label>
    </>
  );
}

export { ToggleBtn };
