
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input name={name} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
    </div>
  );
}

