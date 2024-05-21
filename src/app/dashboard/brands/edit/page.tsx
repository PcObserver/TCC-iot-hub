"use client";

import { AddActionData, AddBrandData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import BrandForm from "@/components/form/brandForm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


interface EditBrandProps {
  searchParams: searchParamsType
}

export default function EditBrand({ searchParams }: EditBrandProps) {
  const [data, setData] = useState({} as AddBrandData)
  const router = useRouter()
  const brandId = String(searchParams.brand)
  const token = `Bearer ${getCookie('sessionToken')}`

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = typeof searchParams.brand === 'string' ? `/api/devices/brands/${brandId}` : null

      if (!endpoint) return

      const response = await api.get<AddBrandData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })


      setData(response.data)
    }

    fetchData()
  }, [searchParams.brand, token, brandId])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddActionData
    console.log({ data })
  }

  const handleDelete = async () => {
    await api.delete(`/api/devices/brands/${brandId}/`, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Marca deletado!')
      router.push('/dashboard/brands')
    }).catch(() => {
      toast.error('Erro ao tentar deletar marca.')
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Atualizar Comando
      </h1>

      <BrandForm
        handleSubmit={handleSubmit}
        defaultData={data}
        buttonLabel="Atualizar"
        enableDelete
        handleDelete={handleDelete}
      />
    </>
  )
}