export const ROLES = {
    ADMIN: "ADMIN",
    HEAD_TEACHER: "HEAD_TEACHER",
    CLASS_TEACHER: "CLASS_TEACHER",
    SUBJECT_TEACHER: "SUBJECT_TEACHER",
    OFFICE_STAFF: "OFFICE_STAFF",
};


export const ROLES2 = {
    ADMIN:1,
    HEAD_TEACHER: 2,
    CLASS_TEACHER: 3,
    SUBJECT_TEACHER: 4,
    OFFICE_STAFF: 5,
};

export const ROLE_OPTIONS = [
    {
        value: "",
        label: "Select Role",
    },
    {
        value: ROLES2.ADMIN,
        label: "Administrator",
    },
    {
        value: ROLES2.HEAD_TEACHER,
        label: "Head Teacher / Principal",
    },
    {
        value: ROLES2.CLASS_TEACHER,
        label: "Class Teacher",
    },
    {
        value: ROLES2.SUBJECT_TEACHER,
        label: "Subject Teacher",
    },
    {
        value: ROLES2.OFFICE_STAFF,
        label: "Office Staff",
    },
];