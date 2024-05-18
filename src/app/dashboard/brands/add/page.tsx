"use client";

import { Input } from "@/components/form/input";
import { FormEvent } from "react";


type AddBrandData = {
  name: string
  prefix: string
}

export default function AddBrand() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddBrandData
    console.log({ data })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Marca
      </h1>

      <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
        <Input name="name" label="Nome" placeholder="Sonoff" required />
        <Input name="prefix" label="Prefixo" placeholder="eWelink_" required />

        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  )
}