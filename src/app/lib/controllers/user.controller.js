"use server";

import { revalidatePath } from "next/cache";
import { User } from "../models/user.model";
import { connectDB } from "../utils";
import { redirect } from "next/navigation";
import bcryptjs from 'bcryptjs';
import { signIn } from "@/auth";

export const fetchUsers = async (q, page = 1, limit = 2) => {
    try {
        connectDB();
        const regex = new RegExp(q, "gi");
        const usersCount = await User.find({
            username: { $regex: regex }
        }).count();
        const users = await User.find({
            username: { $regex: regex }
        }).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });
        return { users, count: usersCount };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users', error);
    }
}

// ! ##### Form Actions ##### ! //

export const addUser = async (formData) => {
    const { username, email, password, phone, isActive, isAdmin, address } = Object.fromEntries(formData);
    connectDB();
    try {
        const hashedPassword = await bcryptjs.hash(password, 10);
        await User.create({ username, email, password: hashedPassword, phone, address, isAdmin, isActive });
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create user', error);
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export const fetchUser = async (id) => {
    connectDB();
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch user', error);
    }
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, isActive, isAdmin, address } = Object.fromEntries(formData);
    connectDB();
    try {
        const updateFields = { username, email, password, phone, isActive, isAdmin, address };
        // choose fields which have some value
        Object.keys(updateFields).forEach(key => {
            (updateFields[key] === "" || undefined) && delete updateFields[key];
        })
        // check and hash the password only if it has been changed
        if ('password' in updateFields) {
            updateFields.password = await bcryptjs.hash(password, 10);
        }
        await User.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to update user', error);
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    connectDB();
    try {
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete user', error);
    }
    revalidatePath('/dashboard/users');
}

export const authenticate = async (prevState, formData) => {
    const { email, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { email, password });
    } catch (error) {
        return "Wrong credentials!";
    }
}