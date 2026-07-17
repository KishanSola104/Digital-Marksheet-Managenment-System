import { Select } from "../ui/SearchInput";
import { ROLES } from "../../config/roles";

function RoleSelect({
  value,
  onChange,
  disabled = false,
}) {
  return (
    <Select
      value={value}
      onChange={onChange}
      disabled={disabled}
      options={ROLES}
    />
  );
}

export default RoleSelect;