"use client";

import ActionForm from "@/components/form/actionForm";
import { AddActionData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface EditActionProps {
  searchParams: searchParamsType
}

export default function EditAction({ searchParams }: EditActionProps) {
  const [data, setData] = useState({} as AddActionData)
  const router = useRouter()
  const actionId = String(searchParams.action)
  const token = `Bearer ${getCookie('sessionToken')}`

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = typeof searchParams.action === 'string' ? `/api/devices/actions/${actionId}` : null

      if (!endpoint) return

      const response = await api.get<AddActionData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })


      setData(response.data)
    }

    fetchData()
  }, [searchParams.action, actionId, token])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddActionData
    console.log({ data })
  }

  const handleDelete = async () => {
    await api.delete(`/api/devices/actions/${actionId}/`, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Comando deletado!')
      router.push('/dashboard/actions')
    }).catch(() => {
      toast.error('Erro ao tentar deletar comando.')
    })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Atualizar Comando
      </h1>

      <ActionForm
        handleSubmit={handleSubmit}
        defaultData={data}
        buttonLabel="Atualizar"
        enableDelete
        handleDelete={handleDelete}
      />
    </>
  )
}