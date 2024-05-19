"use client";

import ActionForm from "@/components/form/actionForm";
import { AddActionData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../services/api";


interface EditActionProps {
  searchParams: searchParamsType
}

export default function EditAction({ searchParams }: EditActionProps) {
  const [data, setData] = useState({} as AddActionData)

  useEffect(() => {
    const fetchData = async () => {
      const token = `Bearer ${getCookie('sessionToken')}`
      const endpoint = typeof searchParams.action === 'string' ? `/api/devices/actions/${String(searchParams.action)}` : null

      if (!endpoint) return

      const response = await api.get<AddActionData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })


      setData(response.data)
    }

    fetchData()
  }, [searchParams.action])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddActionData
    console.log({ data })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Atualizar Comando
      </h1>

      <ActionForm handleSubmit={handleSubmit} defaultData={data} buttonLabel="Atualizar" />
    </>
  )
}