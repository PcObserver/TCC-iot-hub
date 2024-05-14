import SideBar from "@/components/SideBar";
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
        {children}
      </div>
    </div>
  )
}
