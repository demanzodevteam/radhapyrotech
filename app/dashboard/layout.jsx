import { DashboardWrapper } from '@/components/dashboardwrapper/DashboardWrapper';
import { Header } from '@/components/header/Header';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { OrderFilterProvider } from '../Context/OrderContext/OrderContextProvider';
import { DashboardContextProvider } from '@/dashboardcontext/DashboardContextProvider';
import { DarkModeProvider } from '@/darkmodecontext/DarkModeProvider';

export default function DashboardLayout({ children }) {
  return (
    <DashboardContextProvider>
      <DarkModeProvider>
        <DashboardWrapper>
          <Sidebar />
          <Header />
          <main className='md:overflow-y-scroll pt-6 md:pt-8 pb-4 px-4 md:px-[3rem] font-sans dark:text-white bg-gray-100 dark:bg-gray-800 '>
            <OrderFilterProvider>{children}</OrderFilterProvider>
          </main>
        </DashboardWrapper>
      </DarkModeProvider>
    </DashboardContextProvider>
  );
}
