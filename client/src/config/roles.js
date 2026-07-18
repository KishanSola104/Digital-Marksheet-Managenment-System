export const ROLES = {
    ADMIN: "ADMIN",
    HEAD_TEACHER: "HEAD_TEACHER",
    CLASS_TEACHER: "CLASS_TEACHER",
    SUBJECT_TEACHER: "SUBJECT_TEACHER",
};

export const ROLE_OPTIONS = [
    {
        value: "",
        label: "Select Role",
    },
    {
        value: ROLES.ADMIN,
        label: "Administrator",
    },
    {
        value: ROLES.HEAD_TEACHER,
        label: "Head Teacher / Principal",
    },
    {
        value: ROLES.CLASS_TEACHER,
        label: "Class Teacher",
    },
    {
        value: ROLES.SUBJECT_TEACHER,
        label: "Subject Teacher",
    },
];