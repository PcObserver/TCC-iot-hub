import { api } from "@/services/api"
import { jwtDecode } from "jwt-decode"
import { CircleUser } from "lucide-react"
import { cookies } from "next/headers"

interface UserResponse {
  name: string
}


export default async function UserName() {
  const cookieStore = cookies()
  const token = `Bearer ${cookieStore.get('sessionToken')?.value}`
  const decoded = jwtDecode(token) as { user_id: string };
  const userId = decoded?.user_id
  const response = await api.get<UserResponse>(`api/users/${userId}`, {
    headers: {
      'Authorization': token
    }
  })

  return (
    <div className="flex items-center gap-2">
      <CircleUser size={28} />
      <span className="font-semibold text-xl text-black">{response?.data?.name ?? 'User'}</span>
    </div>
  )
}