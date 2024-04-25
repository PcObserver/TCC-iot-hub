import Link from "next/link";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-primary">
      <div className="w-full bg-white rounded-xl shadow sm:max-w-md">
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Cadastrar usuário
          </h1>
          <form className="space-y-4" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@mail.com" required></input>
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required></input>
            </div>
            <button type="submit" className="w-full text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Criar conta</button>
            <p className="text-sm font-light text-gray-500">
              Já possui uma conta? <Link href="/login" className="font-medium text-primary-600 hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}