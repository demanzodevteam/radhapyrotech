function ProfilePage({ params }) {
  console.log(params.id);
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <h2 className='text-2xl font-medium'>Update user account</h2>
      <h3 className='text-xl font-medium'>Update user data</h3>
      <div className='w-full md:max-w-[700px]'></div>
    </div>
  );
}

export default ProfilePage;
