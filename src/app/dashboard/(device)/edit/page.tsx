"use client";

import DeviceForm from "@/components/form/deviceForm";
import { api } from "@/services/api";
import { removeEmptyValues } from "@/utils";
import { AddDeviceData, searchParamsType } from "@/utils/interfaces";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface EditDeviceProps {
  searchParams: searchParamsType
}


export default function EditDevice({ searchParams }: EditDeviceProps) {
  const [data, setData] = useState({} as AddDeviceData)
  const router = useRouter()
  const deviceId = String(searchParams.device)
  const token = `Bearer ${getCookie('sessionToken')}`

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = typeof searchParams.device === 'string' ? `/api/devices/devices/${deviceId}` : null

      if (!endpoint) return

      const response = await api.get<AddDeviceData>(endpoint, {
        headers: {
          'Authorization': token
        }
      })

      setData(response.data)
    }

    fetchData()
  }, [searchParams.device, deviceId, token])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddDeviceData

    await api.patch(`/api/devices/devices/${deviceId}/`, removeEmptyValues(data), {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Dispositivo atulizado!')
      router.push('/dashboard')
    }).catch(() => {
      toast.error('Erro ao atualizar dispositivo.')
    })
  }


  const handleDelete = async () => {
    await api.delete(`/api/devices/devices/${deviceId}/`, {
      headers: {
        'Authorization': token
      }
    }).then(() => {
      toast.success('Dispositivo deletado!')
      router.push('/dashboard')
    }).catch(() => {
      toast.error('Erro ao tentar deletar dispositivo.')
    })
  }
  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Atualizar Dispositivo
      </h1>
      <DeviceForm
        type='edit'
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        defaultData={data}
      />
    </>
  )
}