'use client';
import Link from "next/link";
import { Input } from "./input";
import { FormEvent } from "react";
import { RegisterData, useAuthContext } from "@/contexts/auth";
import { toast } from "sonner";

export function RegisterForm() {
  const { signUp } = useAuthContext()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as RegisterData

    if (data.password.trim() !== data.password_confirmation.trim()) {
      toast.error('As senhas precisam ser iguais')
    } else {
      signUp(data)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input name="name" label="Nome" type="text" placeholder="John Doe" required />
      <Input name="email" label="Email" type="email" placeholder="name@mail.com" required />
      <Input name="password" label="Senha" type="password" placeholder="••••••••" required />
      <Input name="password_confirmation" label="Confirme a Senha" type="password" placeholder="••••••••" required />

      <button type="submit" className="w-full text-white bg-yellow-primary hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Criar conta</button>
      <p className="text-sm font-light text-gray-500">
        Já possui uma conta? <Link href="/login" className="font-medium text-primary-600 hover:underline">Login</Link>
      </p>
    </form>
  )
}