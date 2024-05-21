import { FormEvent } from "react";
import { Input } from "./input";
import { AddActionData } from "@/utils/interfaces";
import { MethodSelect } from "./select/MethodSelect";
import { ProtocolSelect } from "./select/ProtocolSelect";
import { DeviceSelect } from "./select/DeviceSelect";

interface ActionFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  handleDelete?: () => Promise<void>
  enableDelete?: boolean
  buttonLabel?: string
  defaultData?: AddActionData
}

export default function ActionForm({ handleSubmit, buttonLabel, defaultData, enableDelete, handleDelete }: ActionFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="name" label="Nome" defaultValue={defaultData?.name} placeholder="Ligar" required />
      <MethodSelect required defaultValue={defaultData?.method} />
      <ProtocolSelect required defaultValue={defaultData?.protocol} />
      <Input name="path" label="Path" defaultValue={defaultData?.path} placeholder="/example" required />
      <Input name="payload" label="Payload" defaultValue={JSON.stringify(defaultData?.payload)} placeholder="{'example': 'test'}" required />
      <DeviceSelect required defaultValue={defaultData?.parent_device} />
      <Input name="description" label="Descrição" defaultValue={JSON.stringify(defaultData?.description)} placeholder="Descrição do comando" required />

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