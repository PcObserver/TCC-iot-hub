import NavigateButton from "@/components/NavigateButton"
import List, { ActionItem } from "@/components/List"
import SearchBar from "@/components/SearchBar"
import { api } from "@/services/api"
import { ActionData } from "@/utils/interfaces"
import { cookies } from "next/headers"

interface ActionResponse {
  count: number
  next: string | null
  previous: string | null
  results: ActionData[]
}


interface ActionsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Actions({ searchParams }: ActionsProps) {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const endpoint = typeof searchParams.search === 'string' ? `/api/devices/actions/?name=${String(searchParams.search)}` : '/api/devices/actions/'
  const response = await api.get<ActionResponse>(endpoint, {
    headers: {
      'Authorization': token
    }
  })


  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Comandos
      </h1>

      <div className="mt-8 container flex items-center gap-8">
        <SearchBar placeholder="Pesquise Ligar, Desligar...." />
        <div className="w-60 flex justify-end">
          <NavigateButton label="Cadastrar Comando" href="/dashboard/actions/add" />
        </div>
      </div>

      <List>
        {response?.data?.results?.map(device =>
          <ActionItem key={device.id} {...device} />
        )}
      </List>
    </>

  )
}