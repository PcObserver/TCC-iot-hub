"use client";

import DeviceForm from "@/components/form/deviceForm";
import { api } from "@/services/api";
import { AddDeviceData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { FormEvent, useEffect, useState } from "react";


interface EditDeviceProps {
  searchParams: searchParamsType
}


export default function EditDevice({ searchParams }: EditDeviceProps) {
  const [data, setData] = useState({} as AddDeviceData)

  useEffect(() => {
    const fetchData = async () => {
      const token = `Bearer ${getCookie('sessionToken')}`
      const endpoint = typeof searchParams.device === 'string' ? `/api/devices/devices/${String(searchParams.device)}` : null

      if (!endpoint) return

      const response = await api.get<AddDeviceData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })

      setData(response.data)
    }

    fetchData()
  }, [searchParams.device])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddDeviceData
    console.log({ data })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Atualizar Dispositivo
      </h1>
      <DeviceForm handleSubmit={handleSubmit} defaultData={data} buttonLabel="Atualizar" />
    </>
  )
}