"use client";

import { authenticate } from '@/app/lib/controllers/user.controller';
import { useFormState } from 'react-dom';

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <form action={formAction} className="flex flex-col bg-gradient-to-bl from-bgSoft to-bgSofter backdrop-blur-sm p-12 rounded-md items-center sm:w-[30rem]">
            <h1 className="text-2xl mb-5 font-bold">Login</h1>
            <input className="input w-full" type="email" name="email" placeholder="Email" />
            <input className="input w-full" type="password" name="password" placeholder="Password" />
            <button className="submitBtn p-5 mb-7" type="submit">Login</button>
            {state && <p className='text-red-500'>{state}</p>}
        </form>
    )
}

export default LoginForm;