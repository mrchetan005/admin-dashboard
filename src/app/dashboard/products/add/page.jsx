import { addProduct } from "@/app/lib/controllers/product.controller";

const AddProduct = () => {
    return (
        <div className="bg-bgSoft text-bgSofter p-5 rounded-lg mt-5">
            <form action={addProduct} className="flex flex-wrap justify-between">
                <input className="input" type="text" name="title" placeholder="title" required />
                <select className="input" name="cat" id="cat" required>
                    <option className="bg-bg text-text" value="general">Choose a Category</option>
                    <option className="bg-bg text-text" value="kitchen">Kitchen</option>
                    <option className="bg-bg text-text" value="phone">Phone</option>
                    <option className="bg-bg text-text" value="computer">Computer</option>
                </select>
                <input className="input" type="number" name="price" placeholder="price" required />
                <input className="input" type="number" name="stock" placeholder="stock" required />
                <input className="input" type="text" name="color" placeholder="color" />
                <input className="input" type="text" name="size" placeholder="size" />
                <textarea className="input w-full resize-none" name="desc" id="desc" rows="10" placeholder="Description" required></textarea>
                <button className="submitBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct;