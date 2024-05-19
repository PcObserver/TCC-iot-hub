"use client";

import ActionForm from "@/components/form/actionForm";
import { AddActionData, AddBrandData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import BrandForm from "@/components/form/brandForm";


interface EditBrandProps {
  searchParams: searchParamsType
}

export default function EditBrand({ searchParams }: EditBrandProps) {
  const [data, setData] = useState({} as AddBrandData)

  useEffect(() => {
    const fetchData = async () => {
      const token = `Bearer ${getCookie('sessionToken')}`
      const endpoint = typeof searchParams.brand === 'string' ? `/api/devices/brands/${String(searchParams.brand)}` : null

      if (!endpoint) return

      const response = await api.get<AddBrandData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })


      setData(response.data)
    }

    fetchData()
  }, [searchParams.brand])

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

      <BrandForm handleSubmit={handleSubmit} defaultData={data} buttonLabel="Atualizar" />
    </>
  )
}