import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
function Notfound() {
  return (
    <section className='min-h-screen flex-grow dark:bg-gray-800 rounded-md'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='px-6 py-24 mb-4 shadow-md rounded-md border-2 border-gray-600 m-4 md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-8xl text-red-600' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Page Not Found</h1>
            <p className='text-gray-500 text-xl mb-10'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='bg-primary hover:bg-primary  hover:bg-opacity-90 text-white font-bold py-4 px-6 rounded'
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>
  );
}

export default Notfound;
