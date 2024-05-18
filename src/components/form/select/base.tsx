interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export default function Select({ name, label, options, ...rest }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <select name={name} {...rest} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}