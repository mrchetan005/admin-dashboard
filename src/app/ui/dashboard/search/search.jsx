"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder = "Search..." }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", 1);
        if (e.target.value.length > 2) {
            params.set("q", e.target.value);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params}`);
    }, 300);

    return (
        <div className='flex items-center gap-2 bg-bgSofter rounded-lg p-2'>
            <MdSearch />
            <input onChange={handleSearch} type="text" placeholder={placeholder} className="text-text bg-transparent border-none outline-none" />
        </div>
    )
}

export default Search;