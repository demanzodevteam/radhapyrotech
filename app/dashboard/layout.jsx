import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-15/1fr grid-rows-auto/1fr min-h-screen">
      <Sidebar />
      <Header />
      <main className="pt-8 px-[3rem] bg-dashboard dark:bg-gray-800 overflow-scroll">
        {children}
      </main>
    </div>
  );
}
