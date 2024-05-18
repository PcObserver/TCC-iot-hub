import { Input } from "@/components/form/input";
import { DeviceSelect } from "@/components/form/select/DeviceSelect";
import { MethodSelect } from "@/components/form/select/MethodSelect";
import { ProtocolSelect } from "@/components/form/select/ProtocolSelect";

export default function AddAction() {

  return (
    <>
      <h1 className="text-4xl font-bold pb-1 border-transparent border-b-primary border-4 max-w-fit">
        Cadastrar Comando
      </h1>

      <form className="space-y-4 mt-8">
        <Input name="name" label="Nome" placeholder="Ligar" required />
        <MethodSelect required />
        <ProtocolSelect required />
        <Input name="route" label="Rota" placeholder="/example" required />
        <Input name="payload" label="Payload" placeholder="{'example': 'test'}" required />
        <DeviceSelect required />

        <div className="flex justify-end mt-4">
          <button className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  )
}