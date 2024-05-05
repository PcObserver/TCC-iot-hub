import { api } from "@/services/api"
import { Search } from "lucide-react"
import { cookies } from "next/headers"

export default async function Dashboard() {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const response = await api.get('/api/devices/devices/', {
    headers: {
      'Authorization': token
    }
  })
  console.log({ data: response.data })
  return (
    <>
      <div className="bg-gray-100 rounded-xl mt-24">

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <a href="/frontend-performance"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Frontend Performance
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices to improve your frontend performance
              </span>
            </a>
            <a href="/api-security"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                API Security
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices to make your APIs secure
              </span>
            </a>
            <a href="/code-review"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Code Reviews
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices for effective code reviews and quality
              </span>
            </a>
            <a href="/aws"
              className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5">
              <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                AWS
              </span>
              <span className="text-sm leading-normal text-gray-400 sm:block">
                Detailed list of best practices for Amazon Web Services (AWS)
              </span>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}