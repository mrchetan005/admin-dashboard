import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from "./authConfig";
import { connectDB } from "./app/lib/utils";
import { User } from "./app/lib/models/user.model";
import bcryptjs from 'bcryptjs';

const login = async ({ email, password }) => {
    try {
        connectDB();
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Wrong credentials!');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Wrong credentials!');
        }
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login!", error);
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        }),
    ],
    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.img = user.img;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username;
                session.user.img = token.img;
            }
            return session;
        },
    },
})