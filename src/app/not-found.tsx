import Link from 'next/link'

// TODO: Improve styles
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-primary">
      <p className="text-lg text-black">Página inexistente</p>
      <Link href="/">
        <div className="text-[#417365] bg-white transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium- rounded-full text-sm uppercase mt-6 px-4 py-3 text-center me-2 mb-2">
          Return Home
        </div>
      </Link>
    </div>
  )
}