'use client';
import { useAuthContext } from "@/contexts/auth"
import { LogOut } from "lucide-react";


export default function SideBarLogout() {
  const { signOut } = useAuthContext();

  return (
    <li>
      <button onClick={signOut} className="flex w-full items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
        <div className=" text-white transition duration-75 group-hover:text-gray-900" aria-hidden="true">
          <LogOut />
        </div>
        <span className="ms-3 ">Sair</span>
      </button>
    </li>
  )
}