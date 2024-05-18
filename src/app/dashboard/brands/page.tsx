import NavigateButton from "@/components/NavigateButton"
import List, { BrandItem } from "@/components/List"
import SearchBar from "@/components/SearchBar"
import { api } from "@/services/api"
import { BrandData } from "@/utils/interfaces"
import { cookies } from "next/headers"


interface BrandResponse {
  count: number
  next: string | null
  previous: string | null
  results: BrandData[]
}


interface BrandsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Brands({ searchParams }: BrandsProps) {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const endpoint = typeof searchParams.search === 'string' ? `/api/devices/brands/?display_name=${String(searchParams.search)}` : '/api/devices/brands/'
  const response = await api.get<BrandResponse>(endpoint, {
    headers: {
      'Authorization': token
    }
  })

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Marcas
      </h1>

      <div className="mt-8 container flex items-center gap-8">
        <SearchBar placeholder="Pesquise Sonoff, Shelly.." />
        <div className="w-60 flex justify-end">
          <NavigateButton label="Cadastrar Marca" href="" />
        </div>
      </div>

      <List>
        {response?.data?.results?.map(brand =>
          <BrandItem key={brand.id} {...brand} />
        )}
      </List>
    </>
  )
}