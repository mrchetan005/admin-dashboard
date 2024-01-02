"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);
    const ITEMS_PER_PAGE = process.env.ITEMS_PER_PAGE || 2;

    const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEMS_PER_PAGE * parseInt(page) < count;

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`);
    }

    return (
        <div className="flex items-center justify-between mt-5 p-3 text-sm">
            <button
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")} className="bg-text text-bg font-medium disabled:bg-opacity-50 disabled:cursor-not-allowed py-1 px-3 rounded">
                Previous
            </button>
            <button
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}
                className="bg-text text-bg font-medium disabled:bg-opacity-50 disabled:cursor-not-allowed py-1 px-3 rounded">
                Next
            </button>
        </div>
    )
}

export default Pagination;