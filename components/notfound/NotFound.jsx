import { BiSad } from 'react-icons/bi';

function NotFound({ message }) {
  return (
    <div className='p-3 md:p-6 text-center space-y-4'>
      <div className='flex justify-center'>
        <BiSad className='text-3xl md:text-4xl text-primary' />
      </div>
      <p className='text-gray-700 capitalize text-xl dark:text-white'>{message}</p>
    </div>
  );
}

export { NotFound };
