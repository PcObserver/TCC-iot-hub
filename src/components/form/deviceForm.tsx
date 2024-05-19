import { FormEvent } from "react";
import { Input } from "./input";
import { BrandSelect } from "./select/BrandSelect";
import { AddDeviceData } from "@/utils/interfaces";

interface DeviceFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  buttonLabel?: string
  defaultData?: AddDeviceData
}

export default function DeviceForm({ handleSubmit, buttonLabel, defaultData }: DeviceFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="display_name" label="Nome" defaultValue={defaultData?.display_name} placeholder="Sonoff" required />
      <Input name="prefix" label="Prefixo" defaultValue={defaultData?.prefix} placeholder="eWelink_" required />
      <BrandSelect required defaultValue={defaultData?.parent_brand} />
      <Input name="description" label="Descrição" defaultValue={defaultData?.description} placeholder="Detalhes..." required />

      <div className="flex justify-end mt-4">
        <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
          {buttonLabel ?? 'Cadastrar'}
        </button>
      </div>
    </form>
  )
}