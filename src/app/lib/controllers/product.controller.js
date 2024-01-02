"use server";

import { revalidatePath } from "next/cache";
import { Product } from "../models/product.model";
import { connectDB } from "../utils";
import { redirect } from "next/navigation";

export const fetchProducts = async (q, page = 1, limit = 2) => {
    try {
        connectDB();
        const regex = new RegExp(q, "gi");
        const productsCount = await Product.find({
            title: { $regex: regex }
        }).count();
        const products = await Product.find({
            title: { $regex: regex }
        }).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });
        return { products, count: productsCount };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch products', error);
    }
}

// ! ##### Form Actions ##### ! //

export const addProduct = async (formData) => {
    const { title, cat, desc, price, stock, color, size } = Object.fromEntries(formData);
    try {
        connectDB();
        await Product.create({ title, cat, desc, price, stock, color, size });
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create product', error);
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
}

export const fetchProduct = async (id) => {
    connectDB();
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch product', error);
    }
}

export const updateProduct = async (formData) => {
    const { id, title, cat, desc, price, stock, color, size } = Object.fromEntries(formData);
    try {
        connectDB();
        const updateFields = { title, cat, desc, price, stock, color, size };
        Object.keys(updateFields).forEach(key => {
            (updateFields[key] === "" || undefined) && delete updateFields[key]
        })
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to update product', error);
    }
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
}


export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectDB();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete products', error);
    }
    revalidatePath('/dashboard/products');
}


