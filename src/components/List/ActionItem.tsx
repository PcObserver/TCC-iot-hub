import formatDate from "@/utils/date"
import { ActionData } from "@/utils/interfaces"
import { Joystick } from "lucide-react"
import Link from "next/link"

export default function ActionItem({ id, name, payload, updated_at, positive_reviews_count }: ActionData) {
  const lastUpdate = formatDate(updated_at)
  return (
    <div className="flex py-4 px-8 justify-between bg-white shadow-md items-center rounded-xl  ">
      <div className="flex items-center gap-6 min-w-[40%]">
        <Joystick size={36} />
        <div className="w-full">
          <h3 className="font-semibold text-xl text-black">{name}</h3>
          <p className="text-md text-gray-600">Última atualização: {lastUpdate}</p>
        </div>
      </div>


      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl">Num. likes</p>
        <p className="text-lg">{positive_reviews_count}</p>
      </div>

      <Link href={`/dashboard/actions/edit?action=${id}`}>
        Ver detalhes
      </Link>
    </div >
  )
}