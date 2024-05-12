import SearchBar from "@/components/SearchBar"
import { api } from "@/services/api"
import { Bot } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"

interface DeviceData {
  id: string
  display_name: string
  parent_brand: string
  updated_at: string
  createdd_at: string
}
interface DeviceResponse {
  count: number
  next: string | null
  previous: string | null
  results: DeviceData[]
}


interface DashboardProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const endpoint = typeof searchParams.search === 'string' ? `/api/devices/devices/?display_name=${String(searchParams.search)}` : '/api/devices/devices/'
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

      <div className="bg-gray-100 rounded-xl mt-8">
        <SearchBar placeholder="Pesquise Mini R2, One plus..." />
      </div>

      <div className="bg-gray-100 rounded-xl sm:p-8 mt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {response?.data?.results?.map(device => (
              <Link href="#" key={device.id}
                className="relative flex h-full rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                <Bot />
                <span className="text-md ml-2 mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                  {device.display_name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}