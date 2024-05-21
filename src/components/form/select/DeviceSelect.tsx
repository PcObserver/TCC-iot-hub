
import { DeviceData } from "@/utils/interfaces";
import Select from "./base";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

interface DeviceResponse {
  count: number
  next: string | null
  previous: string | null
  results: DeviceData[]
}

type devicesSelect = { value: string; label: string }[]


export function DeviceSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [data, setData] = useState([] as devicesSelect)

  useEffect(() => {
    const fetachData = async () => {
      const token = `Bearer ${getCookie('sessionToken')}`

      const response = await api.get<DeviceResponse>('/api/devices/devices/', {
        headers: {
          'Authorization': token
        }
      })

      const devices = response?.data?.results?.map(device => ({ value: device.id, label: device.display_name }))
      setData(devices)
    }

    fetachData()
  }, [])

  return (
    <Select name="parent_device" label="Dispositivo" options={data} {...props} />
  );
}