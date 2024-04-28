'use client';
import { useAuthContext } from "@/contexts/auth"

export default function SignOutButton() {
  const { signOut } = useAuthContext();

  return (
    <button onClick={signOut} className="text-[#417365] bg-cyan-300 transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium- rounded-full text-lg uppercase px-20 py-3 text-center me-2 mb-2"> SAIR </button>
  )
}