'use client';
import Link from "next/link";
import { Input } from "./input";
import { FormEvent } from "react";

export function RegisterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)


    console.log(data)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input name="email" label="Email" type="email" placeholder="name@mail.com" required />
      <Input name="password" label="Senha" type="password" placeholder="••••••••" required />

      <button type="submit" className="w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Criar conta</button>
      <p className="text-sm font-light text-gray-500">
        Já possui uma conta? <Link href="/login" className="font-medium text-primary-600 hover:underline">Login</Link>
      </p>
    </form>
  )
}