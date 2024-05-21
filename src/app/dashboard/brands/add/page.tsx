"use client";

import BrandForm from "@/components/form/brandForm";
import { AddBrandData } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "cookies-next";
import { FormEvent } from "react";
import { api } from "@/services/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



export default function AddBrand() {
  const router = useRouter()
  const token = `Bearer ${getCookie('sessionToken')}`
  const decoded = jwtDecode(token) as { user_id: string };
  const userId = decoded?.user_id

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddBrandData
    const brandData = { ...data, user_id: userId, contribution_type: "Brand" }

    await api.post('/api/contributions/', brandData, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Marca criada!')
      router.push('/dashboard/brands')
    }).catch(() => {
      toast.error('Erro ao tentar criar marca.')
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Marca
      </h1>

      <BrandForm handleSubmit={handleSubmit} />
    </>
  )
}