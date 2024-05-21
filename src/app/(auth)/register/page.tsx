import { RegisterForm } from "@/components/form/registerForm";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around bg-primary">
      <div className="w-full bg-white rounded-[44px] shadow sm:max-w-md p-10">
        <div className="space-y-4">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Cadastrar usuário
          </h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}