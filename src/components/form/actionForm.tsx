import { FormEvent } from "react";
import { Input } from "./input";
import { AddActionData } from "@/utils/interfaces";
import { MethodSelect } from "./select/MethodSelect";
import { ProtocolSelect } from "./select/ProtocolSelect";
import { DeviceSelect } from "./select/DeviceSelect";

interface ActionFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  handleDelete?: () => Promise<void>
  type?: 'create' | 'edit'
  defaultData?: AddActionData
}

export default function ActionForm({ handleSubmit, type = 'create', defaultData, handleDelete }: ActionFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="name" label="Nome" defaultValue={defaultData?.name} placeholder="Ligar" required={type === 'create'} />
      <MethodSelect required={type === 'create'} defaultValue={defaultData?.method} />
      <ProtocolSelect required={type === 'create'} defaultValue={defaultData?.protocol} />
      <Input name="path" label="Path" defaultValue={defaultData?.path} placeholder="/example" required={type === 'create'} />
      <Input name="payload" label="Payload" defaultValue={JSON.stringify(defaultData?.payload)} placeholder="{'example': 'test'}" required={type === 'create'} />
      <DeviceSelect required={type === 'create'} defaultValue={defaultData?.parent_device} />
      <Input name="description" label="Descrição" defaultValue={JSON.stringify(defaultData?.description)} placeholder="Descrição do comando" required={type === 'create'} />

      <div className="flex justify-end mt-4 gap-4">
        {type === 'edit' && (
          <button type="button" onClick={handleDelete} className="text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center  py-3 px-6">
            Deletar
          </button>
        )}
        <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
          {type === 'create' ? 'Cadastrar' : 'Atualizar'}
        </button>
      </div>
    </form>
  )
}