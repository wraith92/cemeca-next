"use client";
import React from 'react'
import { authenticate } from '../lib/action/user';
import { useFormState, useFormStatus} from "react-dom";
import Submit from '@/components/Loading';



const Login = async () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="flex items-center justify-center h-screen">
      <form action={formAction} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <Submit />
        </div>
        {state && state}
      </form>
    </div>
  );
}

export default Login;