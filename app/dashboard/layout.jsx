"use client";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { TanstackProvider } from "@/components/tanstack_provider/TanstackProvider";
import { DarkModeProvider } from "@/darkmodecontext/DarkModeProvider";
import { DashboardContextProvider } from "@/dashboardcontext/DashboardContextProvider";
import { useDashboardContext } from "@/dashboardcontext/useDashboardContext";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const { showSidebar, handleOpen, handleClose } = useDashboardContext();
  return (
    <div
      className={`grid grid-cols-1 ${
        showSidebar ? "md:grid-cols-15/1fr" : "grid-cols-1"
      }  grid-rows-auto/1fr h-auto md:h-screen`}
    >
      <Sidebar />
      <Header />
      <main className="md:overflow-y-scroll pt-6 md:pt-8 pb-4 px-4 md:px-[3rem] font-sans dark:text-white bg-gray-100 dark:bg-gray-800 ">
        <DarkModeProvider>
          <TanstackProvider>
            <DashboardContextProvider>
              <DarkModeProvider>{children}</DarkModeProvider>
            </DashboardContextProvider>
          </TanstackProvider>
        </DarkModeProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 16px",
              // backgroundColor: "bg-slate",
              // color: "var(--color-gray-700)",
            },
          }}
        />
      </main>
    </div>
  );
}
