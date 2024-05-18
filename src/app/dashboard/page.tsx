import NavigateButton from "@/components/NavigateButton"
import List, { DeviceItem } from "@/components/List"
import SearchBar from "@/components/SearchBar"
import { api } from "@/services/api"
import { DeviceData } from "@/utils/interfaces"
import { cookies } from "next/headers"


interface DeviceResponse {
  count: number
  next: string | null
  previous: string | null
  results: DeviceData[]
}


type searchParamsType = { [key: string]: string | string[] | undefined }
interface DashboardProps {
  searchParams: searchParamsType
}

function buildEndpoint(searchParams: searchParamsType) {
  if (typeof searchParams.search !== 'string' && typeof searchParams.brand !== 'string') return '/api/devices/devices/'
  if (typeof searchParams.search === 'string' && typeof searchParams.brand !== 'string') return `/api/devices/devices/?display_name=${String(searchParams.search)}`
  if (typeof searchParams.search !== 'string' && typeof searchParams.brand === 'string') return `/api/devices/devices/?parent_brand=${String(searchParams.brand)}`
  return `/api/devices/devices/?display_name=${String(searchParams.search)}&parent_brand=${String(searchParams.brand)}`
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const endpoint = buildEndpoint(searchParams)
  const response = await api.get<DeviceResponse>(endpoint, {
    headers: {
      'Authorization': token
    }
  })

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Dispositivos
      </h1>

      <div className="mt-8 container flex items-center gap-8">
        <SearchBar placeholder="Pesquise Mini R2, One plus..." />
        <div className="w-60 flex justify-end">
          <NavigateButton label="Cadastrar Dispositivo" href="" />
        </div>
      </div>

      <List>
        {response?.data?.results?.map(device =>
          <DeviceItem key={device.id} {...device} />
        )}
      </List>
    </>

  )
}