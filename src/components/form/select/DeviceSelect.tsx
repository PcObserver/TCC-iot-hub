
import Select from "./base";

const devices = [
  { value: "sonoff_mini_r2", label: "Sonoff Mini R2" },
  { value: "shelly_one_plus", label: "Shelly One Plus" },
]

export function DeviceSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Select name="device" label="Procolo" options={devices} {...props} />
  );
}