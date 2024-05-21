import { Wifi } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-20  bg-primary">
      <Image
        src="/home-page.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="w-[20%] text-center">
        <div className="mb-8">
          <h1 className="text-white text-pretty font-bold text-[2.5em] mb-4 leading-10">Bem vindo(a) ao Elegos!</h1>
          <h2 className="text-white text-[1em]">Diga adeus à confusão de ter que alternar entre dezenas de aplicativos para controlar seus dispositivos!</h2>
        </div>
        <Link href="/login">
          <div className="text-black bg-yellow-primary transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium- font-bold rounded-full text-lg uppercase px-20 py-3 text-center me-2 mb-2">
            Começar!
          </div>
        </Link>
      </div>
    </main>
  );
}
