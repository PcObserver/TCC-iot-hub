import { FormEvent } from "react";
import { Input } from "./input";
import { BrandSelect } from "./select/BrandSelect";
import { AddDeviceData } from "@/utils/interfaces";

interface DeviceFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  handleDelete?: () => Promise<void>
  enableDelete?: boolean
  buttonLabel?: string
  defaultData?: AddDeviceData
}

export default function DeviceForm({ handleSubmit, buttonLabel, defaultData, enableDelete, handleDelete }: DeviceFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="display_name" label="Nome" defaultValue={defaultData?.display_name} placeholder="Sonoff" required />
      <Input name="prefix" label="Prefixo" defaultValue={defaultData?.prefix} placeholder="eWelink_" required />
      <BrandSelect required defaultValue={defaultData?.parent_brand} />
      <Input name="description" label="Descrição" defaultValue={defaultData?.description} placeholder="Detalhes..." required />

      <div className="flex justify-end mt-4 gap-4">
        {enableDelete && (
          <button type="button" onClick={handleDelete} className="text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center  py-3 px-6">
            Deletar
          </button>
        )}
        <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
          {buttonLabel ?? 'Cadastrar'}
        </button>
      </div>
    </form>
  )
}