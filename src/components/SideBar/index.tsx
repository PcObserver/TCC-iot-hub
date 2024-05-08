import { Bot, Factory, Wifi, Zap } from "lucide-react";
import SideBarItem from "./SideBarItem";
import SideBarLogout from "./SideBarLogout";

export default function SideBar() {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-12 overflow-y-auto flex flex-col justify-between bg-primary">
        <div className="flex items-center mb-4 gap-4">
          <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center ">
            <Wifi color="#417365" size={36} />
          </div>
          <span className="text-white font-semibold text-lg">Lucas Digitador</span>
        </div>
        <ul className="space-y-2 font-medium h-full pt-4">
          <SideBarItem label="Marcas" link="/dashboard/brands" Icon={Factory} />
          <SideBarItem label="Dispositivos" link="/dashboard" Icon={Bot} />
          <SideBarItem label="Ações" link="/dashboard/actions" Icon={Zap} />
        </ul>
        <div className="space-y-2 font-medium">
          <SideBarLogout />
        </div>
      </div>
    </aside>
  )
}