
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}
export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="bg-primary hover:bg-primary-dark py-3 px-6 rounded-md text-white">
      {label}
    </button>
  )
}