
import { useEffect, useState } from "react";
import Select from "./base";
import { getCookie } from "cookies-next";
import { api } from "@/services/api";
import { BrandData } from "@/utils/interfaces";


interface BrandResponse {
  count: number
  next: string | null
  previous: string | null
  results: BrandData[]
}

type brandsSelect = { value: string; label: string }[]

export function BrandSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [data, setData] = useState([] as brandsSelect)

  useEffect(() => {
    const fetachData = async () => {
      const token = `Bearer ${getCookie('sessionToken')}`

      const response = await api.get<BrandResponse>('/api/devices/brands/', {
        headers: {
          'Authorization': token
        }
      })

      const brands = response?.data?.results?.map(brand => ({ value: brand.id, label: brand.display_name }))
      setData(brands)
    }

    fetachData()
  }, [])

  return (
    <Select name="parent_brand" label="Marcas" options={data} {...props} />
  );
}