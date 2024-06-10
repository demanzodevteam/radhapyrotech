"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export function ProductPagination({ count }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const PAGE_SIZE = 6;

  console.log(PAGE_SIZE);
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  let pageSize = 12;
  const pageCount = Math.ceil(count / pageSize);
  const totalPages = Array.from({ length: pageCount }, (_, i) => i + 1);
  function previousPage() {
    const previous = currentPage !== 1 ? currentPage - 1 : currentPage;
    const params = new URLSearchParams(searchParams);
    params.set("page", previous);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", next);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  function onChangeClick(page) {
    if (currentPage === page) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  if (pageCount <= 1) return null;
  return (
    <div className="flex justify-center pt-4 items-center p-2">
      <div className="inline-flex overflow-hidden bg-gray-100 dark:bg-gray-800 ">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="flex h-7 min-w-7 rounded-l items-center justify-center border  px-2 text-base font-medium border-gray-300 dark:border-gray-600  dark:text-white hover:bg-primary hover:text-white"
        >
          <FaArrowLeft className="text-base" />
        </button>
        <>
          {totalPages.map((page) => (
            <button
              key={page}
              onClick={() => onChangeClick(page)}
              className={`${
                currentPage === page ? "bg-primary text-white border-y-0" : ""
              } flex h-7 min-w-7 items-center justify-center  border border-stroke px-2 text-base font-medium  border-gray-300 dark:border-gray-600 dark:text-white hover:bg-primary hover:text-white`}
            >
              {page}
            </button>
          ))}
        </>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="flex h-7 min-w-7 items-center justify-center rounded-r px-2 text-base font-medium  border border-gray-300 dark:border-gray-600 dark:text-white hover:bg-primary hover:text-white"
        >
          <FaArrowRight className="text-base" />
        </button>
      </div>
    </div>
  );
}
