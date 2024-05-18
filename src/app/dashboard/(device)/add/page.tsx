"use client";

import { Input } from "@/components/form/input";
import { BrandSelect } from "@/components/form/select/BrandSelect";
import { FormEvent } from "react";


type AddDeviceData = {
  name: string
  prefix: string
  brand: string
  description: string
}

export default function AddDevice() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddDeviceData
    console.log({ data })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Dispositivo
      </h1>

      <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
        <Input name="name" label="Nome" placeholder="Sonoff" required />
        <Input name="prefix" label="Prefixo" placeholder="eWelink_" required />
        <BrandSelect required />
        <Input name="description" label="Descrição" placeholder="Detalhes..." required />

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  )
}