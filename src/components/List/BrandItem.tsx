import formatDate from "@/utils/date"
import { BrandData } from "@/utils/interfaces"
import { Usb } from "lucide-react"
import Link from "next/link"



export default function BrandItem({ id, display_name, devices_count, updated_at, positive_reviews_count }: BrandData) {
  const lastUpdate = formatDate(updated_at)
  return (
    <div className="flex py-4 px-8 justify-between bg-white shadow-md items-center rounded-xl  ">
      <div className="flex items-center gap-6 min-w-[40%]">
        <Usb size={36} />
        <div className="w-full">
          <h3 className="font-semibold text-xl text-black">{display_name}</h3>
          <p className="text-md text-gray-600">Última atualização: {lastUpdate}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. disp</p>
        <p className="text-lg">{devices_count}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. likes</p>
        <p className="text-lg">{positive_reviews_count}</p>
      </div>

      <Link href={`/dashboard?brand=${id}`}>
        Ver dispositivos
      </Link>
    </div >
  )
}


