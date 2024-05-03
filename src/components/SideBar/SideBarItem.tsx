
import { LucideProps } from "lucide-react"
import Link from "next/link"
import { ForwardRefExoticComponent } from "react"

interface SideBarItemProps {
  label: string
  link: string
  Icon: ForwardRefExoticComponent<LucideProps>
}
export default function SideBarItem({ label, link, Icon }: SideBarItemProps) {
  return (
    <li>
      <Link href={link} className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
        <div className=" text-white transition duration-75 group-hover:text-gray-900" aria-hidden="true">
          <Icon />
        </div>
        <span className="ms-3 ">{label}</span>
      </Link>
    </li>
  )
}