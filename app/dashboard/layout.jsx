import { Header, Sidebar } from '@/components';

export default function DashboardLayout({ children }) {
  return (
    <div className='grid grid-cols-15/1fr grid-rows-auto/1fr min-h-screen'>
      <Sidebar />
      <Header />
      <main className='pt-16 px-[3rem] pb-24 bg-dashboard dark:bg-gray-800 overflow-scroll'>
        {children}
      </main>
    </div>
  );
}
