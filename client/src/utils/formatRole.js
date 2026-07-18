import { ROLES } from "../config/roles";

export function formatRole(role) {
    switch (role) {
        case ROLES.ADMIN:
            return "Administrator";

        case ROLES.HEAD_TEACHER:
            return "Head Teacher";

        case ROLES.CLASS_TEACHER:
            return "Class Teacher";

        case ROLES.SUBJECT_TEACHER:
            return "Subject Teacher";

        default:
            return role;
    }
}