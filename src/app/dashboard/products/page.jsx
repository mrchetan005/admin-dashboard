import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { deleteProduct, fetchProducts } from "@/app/lib/controllers/product.controller";


const Products = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { products, count } = await fetchProducts(q, page);

    return (
        <div className="bg-bgSoft p-5 rounded-lg mt-5">
            <div className="flex items-center justify-between">
                <Search placeholder="Search for products..." />
                <Link href={'/dashboard/products/add'}>
                    <button className="p-2 flex items-center gap-2 w-max bg-[#5d57c9] text-white border-none rounded-md">Add New</button>
                </Link>
            </div>
            <table className="w-full overflow-x-auto divide-y divide-yellow-50/10 mt-5">
                <thead>
                    <tr>
                        <td className="p-2">Title</td>
                        <td className="p-2">Description</td>
                        <td className="p-2">Price</td>
                        <td className="p-2">Created At</td>
                        <td className="p-2">Stock</td>
                        <td className="p-2">Action</td>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        products.map((product) => (
                            <tr key={product.id} className="">
                                <td className="p-2">
                                    <div className="flex items-center italic gap-2">
                                        <Image src={product.image || "/noproduct.jpg"} alt={product.title} height={40} width={40} className="rounded-full object-cover w-10 h-10" />
                                        {product.title}
                                    </div>
                                </td>
                                <td className="p-2">{product.desc}</td>
                                <td className="p-2">${product.price}</td>
                                <td className="p-2">{new Date(product.createdAt).toString()?.split(" ")?.slice(1, 4)?.join(" ")}</td>
                                <td className="p-2">{product.stock}</td>
                                <td className="p-2">
                                    <div className="flex items-center gap-2">
                                        <Link href={`/dashboard/products/${product.id}`}>
                                            <button className="bg-teal-500 px-2 py-1 border-none rounded">View</button>
                                        </Link>
                                        <form action={deleteProduct}>
                                            <input type="hidden" name="id" value={product.id} />
                                            <button type="submit" className="bg-[#dc143c] px-2 py-1 border-none rounded">Delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default Products;