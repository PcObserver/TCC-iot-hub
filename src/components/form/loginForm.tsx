"use client";
import Link from "next/link";
import { Input } from "./input";
import { FormEvent } from "react";
import { SignInData, useAuthContext } from "@/contexts/auth";



// @Abc123456
export function LoginForm() {
  const { signIn } = useAuthContext()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as SignInData
    signIn(data)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input name="email" label="Email" type="email" placeholder="name@mail.com" required />
      <Input name="password" label="Senha" type="password" placeholder="••••••••" required />

      <button type="submit" className="w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
      <p className="text-sm font-light text-gray-500">
        Não possui uma conta? <Link href="/register" className="font-medium text-primary-600 hover:underline">Criar conta</Link>
      </p>
    </form>
  )
}