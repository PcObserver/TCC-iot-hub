
import Select from "./base";

const methods = [
  { value: "GET", label: "GET" },
  { value: "POST", label: "POST" },
  { value: "PUT", label: "PUT" },
  { value: "DELETE", label: "DELETE" }
]

export function MethodSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="method" label="Método" options={methods} {...props} />
  );
}