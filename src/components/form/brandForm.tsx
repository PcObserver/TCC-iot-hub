
import { FormEvent } from "react";
import { Input } from "./input";
import { AddBrandData } from "@/utils/interfaces";

interface BrandFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  handleDelete?: () => Promise<void>
  enableDelete?: boolean
  buttonLabel?: string
  defaultData?: AddBrandData
}

export default function BrandForm({ handleSubmit, buttonLabel, defaultData, enableDelete, handleDelete }: BrandFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="display_name" label="Nome" defaultValue={defaultData?.display_name} placeholder="Sonoff" required />
      <Input name="prefix" label="Prefixo" defaultValue={defaultData?.prefix} placeholder="eWelink_" required />

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