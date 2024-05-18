
import Select from "./base";

const devices = [
  { value: "sonoff", label: "Sonoff" },
  { value: "shelly", label: "Shelly" },
]

export function DeviceSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="device" label="Procolo" options={devices} {...props} />
  );
}