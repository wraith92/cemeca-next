"use client";
import React from 'react'
import { authenticate } from '../lib/action/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { useFormState, useFormStatus} from "react-dom";
import Submit from '@/components/Loading';



const Login = async () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  const title = "Connexion";

  return (
    <div className="flex items-center justify-center h-screen">

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="form-control">
            {/* Champs de formulaire */}
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>      
              <Input
                type="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input
                type="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className='flex justify-center'>
              <Submit title={title}/>
            </div>
            {state && state}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;