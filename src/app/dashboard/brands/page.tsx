import { api } from "@/services/api"
import { Bot, Search } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"

const mockData = {
  data: [
    {
      id: 0,
      display_name: 'Sonoff'
    },
    {
      id: 1,
      display_name: 'Shelly'
    }
  ]
}

export default async function Dashboard() {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  // const response = await api.get('/api/devices/devices/', {
  //   headers: {
  //     'Authorization': token
  //   }
  // })

  const response = mockData
  console.log({ data: response.data })
  return (
    <>
      <h1 className="mt-20 text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Marcas
      </h1>

      <div className="bg-gray-100 rounded-xl mt-8">

        <form className=" ">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500">
              <Search size={20} />
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-prring-primary " placeholder="Pesquise Sonoff, Shelly..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>

      </div>
      <div className="bg-gray-100 rounded-xl sm:p-8 mt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {response.data.map(device => (
              <Link href="#" key={device.id}
                className="relative flex h-full rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
                <Bot />
                <span className="text-md ml-2 mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                  {device.display_name}
                </span>
                {/* <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices to improve your frontend performance
              </span> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}