"use client";

import DeviceForm from "@/components/form/deviceForm";
import { AddDeviceData } from "@/utils/interfaces";
import { FormEvent } from "react";




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

      <DeviceForm handleSubmit={handleSubmit} />
    </>
  )
}