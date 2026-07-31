import { Select } from "../ui/SearchInput";

function RoleSelect({
  roles = [],
  loading = false,
  value,
  onChange,
  disabled = false,
}) {
  const roleOptions = [
    {
      value: "",
      label: "-- Select Role --",
    },
    ...roles.map((role) => ({
      value: String(role.roleId), 
      label: role.roleName
        .replaceAll("_", " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    })),
  ];

  return (
    <Select
      value={value}
      onChange={onChange}
      disabled={disabled || loading}
      options={roleOptions}
    />
  );
}

export default RoleSelect;