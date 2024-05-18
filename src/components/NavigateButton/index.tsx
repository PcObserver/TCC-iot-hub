import Link from "next/link"

interface LinkProps {
  label: string
  href: string
}
export default function NavigateButton({ label, href }: LinkProps) {
  return (
    <Link href={href} className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
      {label}
    </Link>
  )
}