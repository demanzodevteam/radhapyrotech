import Footer from "@/components/Footer/Footer";
import ProductsGrid from "@/components/ProductsPage/ProductsGrid";
import { LoadingSpinner } from "@/components/loadingspinner/LoadingSpinner";
import WebsiteHeader from "@/components/websiteheader/WebsiteHeader";
import { Suspense } from "react";

export default function Products() {
  return (
    <div className="z-0">
      <WebsiteHeader />
      <div className="m-14 mb-8">
        <h1 className="text-center pt-16 pb-8 text-3xl font-extrabold">
          Products
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductsGrid />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
