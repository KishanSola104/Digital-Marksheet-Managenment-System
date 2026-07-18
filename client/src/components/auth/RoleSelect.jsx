import { Select } from "../ui/SearchInput";
import { ROLE_OPTIONS } from "../../config/roles";

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
            options={ROLE_OPTIONS}
        />
    );
}

export default RoleSelect;