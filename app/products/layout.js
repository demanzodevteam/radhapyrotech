import WebsiteHeader from "@/components/websiteheader/WebsiteHeader";

export const metadata = {
  title: "Products",
  description: "Product Page",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <WebsiteHeader />
      {children}
    </main>
  );
}
