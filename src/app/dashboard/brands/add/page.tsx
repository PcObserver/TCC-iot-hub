"use client";

import BrandForm from "@/components/form/brandForm";
import { Input } from "@/components/form/input";
import { AddBrandData } from "@/utils/interfaces";
import { FormEvent } from "react";



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

      <BrandForm handleSubmit={handleSubmit} />
    </>
  )
}