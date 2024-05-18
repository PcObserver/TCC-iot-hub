
import Select from "./base";

const protocols = [
  { value: "HTTP", label: "HTTP" },
  { value: "MQTT", label: "MQTT" },
]

export function ProtocolSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="protocol" label="Procolo" options={protocols} {...props} />
  );
}