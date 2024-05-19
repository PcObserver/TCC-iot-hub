import { FormEvent } from "react";
import { Input } from "./input";
import { AddActionData } from "@/utils/interfaces";
import { MethodSelect } from "./select/MethodSelect";
import { ProtocolSelect } from "./select/ProtocolSelect";
import { DeviceSelect } from "./select/DeviceSelect";

interface ActionFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  buttonLabel?: string
  defaultData?: AddActionData
}

export default function ActionForm({ handleSubmit, buttonLabel, defaultData }: ActionFormProps) {

  return (
    <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
      <Input name="name" label="Nome" defaultValue={defaultData?.name} placeholder="Ligar" required />
      <MethodSelect required />
      <ProtocolSelect required />
      <Input name="route" label="Rota" placeholder="/example" required />
      <Input name="payload" label="Payload" defaultValue={JSON.stringify(defaultData?.payload)} placeholder="{'example': 'test'}" required />
      <DeviceSelect required />

      <div className="flex justify-end mt-4">
        <button type="submit" className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
          {buttonLabel ?? 'Cadastrar'}
        </button>
      </div>
    </form>
  )
}