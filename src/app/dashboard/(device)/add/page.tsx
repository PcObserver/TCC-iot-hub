"use client";

import DeviceForm from "@/components/form/deviceForm";
import { api } from "@/services/api";
import { AddDeviceData } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";




export default function AddDevice() {
  const router = useRouter()
  const token = `Bearer ${getCookie('sessionToken')}`
  const decoded = jwtDecode(token) as { user_id: string };
  const userId = decoded?.user_id

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddDeviceData
    const deviceData = { ...data, user_id: userId, contribution_type: "Device" }

    await api.post('/api/contributions/', deviceData, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Comando criado!')
      router.push('/dashboard')
    }).catch(() => {
      toast.error('Erro ao tentar criar comando.')
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Dispositivo
      </h1>

      <DeviceForm handleSubmit={handleSubmit} />
    </>
  )
}