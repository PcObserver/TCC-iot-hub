import { DeviceData } from "@/utils/interfaces"
import { Bot } from "lucide-react"
import Link from "next/link"
import Dropdown from "../Dropdown"
import { MenuItem } from '@headlessui/react'


export default function DeviceItem({
  id,
  display_name,
  actions_count,
  positive_reviews_count
}: DeviceData) {
  return (
    <div className="flex py-4 px-8 justify-between bg-white shadow-md items-center rounded-xl  ">
      <div className="flex items-center gap-6 min-w-[40%]">
        <Bot size={36} />
        <div className="w-full">
          <h3 className="font-semibold text-xl text-black">{display_name}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. cmd</p>
        <p className="text-lg">{actions_count}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. likes</p>
        <p className="text-lg">{positive_reviews_count}</p>
      </div>

      <div className="flex flex-col items-center">
        <Dropdown>
          <MenuItem>
            <Link href={`/dashboard/actions?device=${id}`} className="text-gray-700 block px-4 py-2 text-sm">
              Ver comandos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={`/dashboard/edit?device=${id}`} className="text-gray-700 block px-4 py-2 text-sm">
              Editar
            </Link>
          </MenuItem>
        </Dropdown>
      </div>
    </div >
  )
}

