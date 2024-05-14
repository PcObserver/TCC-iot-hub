import { DeviceData } from "@/utils/interfaces"
import { Bot } from "lucide-react"
import Link from "next/link"



export default function DeviceItem({
  id,
  display_name,
  parent_brand,
  updated_at,
  created_at
}: DeviceData) {
  return (
    <div className="flex py-4 px-8 justify-between bg-white shadow-md items-center rounded-xl  ">
      <div className="flex items-center gap-6">
        <Bot size={36} />
        <div className="w-full">
          <h3 className="font-semibold text-xl text-black">{display_name}</h3>
          <p className="text-md text-gray-600">divice - hostname.local - address - port </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. cmd</p>
        <p className="text-lg">10</p>
      </div>

      <Link href='#'>
        Ver comandos
      </Link>
    </div >
  )
}