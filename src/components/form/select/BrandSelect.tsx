
import Select from "./base";

const brands = [
  { value: "sonoff", label: "Sonoff" },
  { value: "shelly", label: "Shelly" },
]

export function BrandSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="brand" label="Marcas" options={brands} {...props} />
  );
}