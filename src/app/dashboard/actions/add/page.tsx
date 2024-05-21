"use client";

import ActionForm from "@/components/form/actionForm";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";
import { FormEvent } from "react";
import { api } from "@/services/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


type AddCommandData = {
  name: string
  method: string
  protocol: string
  payload: string
  device: string
}

export default function AddAction() {
  const router = useRouter()
  const token = `Bearer ${getCookie('sessionToken')}`
  const decoded = jwtDecode(token) as { user_id: string };
  const userId = decoded?.user_id

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddCommandData
    const commandData = { ...data, user_id: userId, contribution_type: "Action" }

    await api.post('/api/contributions/', commandData, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Comando criado!')
      router.push('/dashboard/actions')
    }).catch(() => {
      toast.error('Erro ao tentar criar comando.')
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Comando
      </h1>

      <ActionForm handleSubmit={handleSubmit} />
    </>
  )
}