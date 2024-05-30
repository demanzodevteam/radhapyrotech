import { cn } from 'clsx-tailwind-merge';

function FormRow({ label, children, error, colspan }) {
  return (
    <div
      className={cn('flex flex-col gap-2', {
        'col-span-2': colspan === 2,
      })}
    >
      {label && (
        <label
          className='text-gray-800 capitalize dark:text-white text-base'
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}

      {error && (
        <span className='text-red-600 capitalize text-sm font-normal'>
          {error}
        </span>
      )}
    </div>
  );
}

export { FormRow };
