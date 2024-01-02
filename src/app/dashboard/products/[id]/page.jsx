import { fetchProduct, updateProduct } from "@/app/lib/controllers/product.controller";
import Image from "next/image";

const Product = async ({ params }) => {
    const { id } = params;
    const product = await fetchProduct(id);
    return (
        <div className="flex gap-12 mt-5">
            <div className="flex-1 bg-bgSoft text-textSoft p-5 rounded-lg font-bold h-max">
                <div className="relative w-full h-72 rounded-lg overflow-hidden mb-5">
                    <Image className="object-cover" src={product.image || "/noproduct.jpg"} alt={product.title} fill />
                </div>
                {product.title}
            </div>
            <div className="flex-[3]">
                <form action={updateProduct} className="flex flex-col">
                    <input type="hidden" name="id" value={product.id} />
                    <label className="mb-2 text-sm" htmlFor="">Title</label>
                    <input className="input w-full" type="text" name="title" placeholder={product.title || "title"} />
                    <label className="mb-2 text-sm" htmlFor="">Price</label>
                    <input className="input w-full" type="number" name="price" placeholder={product.price || "price"} />
                    <label className="mb-2 text-sm" htmlFor="">Stock</label>
                    <input className="input w-full" type="number" name="stock" placeholder={product.stock || "stock"} />
                    <label className="mb-2 text-sm" htmlFor="">Color</label>
                    <input className="input w-full" type="text" name="color" placeholder={product.color || "color"} />
                    <label className="mb-2 text-sm" htmlFor="">Size</label>
                    <input className="input w-full" type="text" name="size" placeholder={product.size || "size"} />

                    <label className="mb-2 text-sm" htmlFor="">Category</label>
                    <select className="input w-full" name="cat" id="cat">
                        {
                            categories.map(cat => (
                                <option key={cat} className="bg-bg text-text uppercase" value={cat}>{cat}</option>
                            ))
                        }
                    </select>
                    <label className="mb-2 text-sm" htmlFor="">Description</label>
                    <textarea className="input w-full resize-none" name="desc" id="desc" placeholder={product.desc || "Description"}></textarea>
                    <button className="submitBtn" type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Product;

const categories = ['kitchen', 'phone', 'computer'];