
import Select from "./base";

const methods = [
  { value: "GET", label: "GET" },
  { value: "POST", label: "POST" },
  { value: "PATCH", label: "PATCH" }
]

export function MethodSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="method" label="Método" options={methods} {...props} />
  );
}