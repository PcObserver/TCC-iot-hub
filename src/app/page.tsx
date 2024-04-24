import { Wifi } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-primary">
      <div className="h-48 w-48 rounded-3xl bg-secondary flex items-center justify-center ">
        <Wifi  color="#417365" size={96}/>
      </div>
      <button className="text-[#417365] bg-white transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium- rounded-full text-lg uppercase px-20 py-3 text-center me-2 mb-2">
        Login
      </button>
    </main>
  );
}
