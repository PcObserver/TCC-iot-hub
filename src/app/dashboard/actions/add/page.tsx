"use client";

import ActionForm from "@/components/form/actionForm";
import { Input } from "@/components/form/input";
import { DeviceSelect } from "@/components/form/select/DeviceSelect";
import { MethodSelect } from "@/components/form/select/MethodSelect";
import { ProtocolSelect } from "@/components/form/select/ProtocolSelect";
import { FormEvent } from "react";


type AddCommandData = {
  name: string
  method: string
  protocol: string
  payload: string
  device: string
}

export default function AddAction() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as AddCommandData
    console.log({ data })
  }

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Comando
      </h1>

      <ActionForm handleSubmit={handleSubmit} />
    </>
  )
}