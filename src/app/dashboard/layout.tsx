import SideBar from "@/components/SideBar";
import UserName from "@/components/UserName";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.has('sessionToken') && cookieStore.has('refreshToken')

  if (!isAuthenticated) {
    permanentRedirect('/login')
  }

  return (
    <div className="bg-[#FCFCFC]">
      <SideBar />
      <div className="p-8 sm:ml-72">
        <div className="flex justify-end mb-4">
          <UserName />
        </div>
        {children}
      </div>
    </div>
  )
}
