import { Header, Sidebar } from '@/components';

export default function DashboardLayout({ children }) {
  return (
    <div className='grid grid-cols-24/1fr grid-rows-auto/1fr min-h-screen'>
      <Sidebar />
      <Header />
      <main className='pt-16 px-[4.5rem] pb-24 bg-dashboard overflow-scroll'>
        {children}
      </main>
    </div>
  );
}
