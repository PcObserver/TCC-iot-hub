'use client';
import { useAuthContext } from "@/contexts/auth"
import { LogOut } from "lucide-react";


export default function SideBarLogout() {
  const { signOut } = useAuthContext();

  return (
    <button onClick={signOut} className="flex bg-gray-100 w-full items-center p-3 text-gray-900 rounded-lg hover:bg-primary-dark group">
      <div className=" group-hover:text-white transition duration-75 text-gray-900" aria-hidden="true">
        <LogOut />
      </div>
      <span className="ms-3 ">Sair</span>
    </button>
  )
}