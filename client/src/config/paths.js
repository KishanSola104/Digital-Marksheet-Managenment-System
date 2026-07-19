import { ROLES } from "./roles";

export const ROLE_BASE_PATHS = {
    [ROLES.ADMIN]: "/admin",
    [ROLES.HEAD_TEACHER]: "/head-teacher",
    [ROLES.CLASS_TEACHER]: "/class-teacher",
    [ROLES.SUBJECT_TEACHER]: "/subject-teacher",
    [ROLES.OFFICE_STAFF]: "/office-staff",
};

export const ADMIN_PATHS = {
    DASHBOARD: "/admin/dashboard",
    TEACHERS: "/admin/teachers",
    CLASSES: "/admin/classes",
    SECTIONS: "/admin/sections",
    SUBJECTS: "/admin/subjects",
    STUDENTS: "/admin/students",
    ACADEMIC_YEAR: "/admin/academic-year",
    EXAMS: "/admin/exams",
    OFFICE_STAFF: "/admin/office-staff",
    SCHOOL_INFORMATION: "/admin/school-information",
    BACKUP_RESTORE: "/admin/backup-restore",
    AUDIT_LOG: "/admin/audit-log",
    SETTINGS: "/admin/settings",
    PROFILE: "/admin/profile",
};

export const HEAD_TEACHER_PATHS = {
    DASHBOARD: "/head-teacher/dashboard",
    TEACHERS: "/head-teacher/teachers",
    CLASSES: "/head-teacher/classes",
    SECTIONS: "/head-teacher/sections",
    SUBJECTS: "/head-teacher/subjects",
    STUDENTS: "/head-teacher/students",
    EXAMS: "/head-teacher/exams",
    RESULTS: "/head-teacher/results",
    SETTINGS: "/head-teacher/settings",
    PROFILE: "/head-teacher/profile",
};

export const CLASS_TEACHER_PATHS = {
    DASHBOARD: "/class-teacher/dashboard",
    SUBJECTS_TEACHERS: "/class-teacher/subjects",
    EXAMS: "/class-teacher/exams",
    RESULTS: "/class-teacher/results",
    REPORT_CARD: "/class-teacher/report-card",
    SETTINGS: "/class-teacher/settings",
    PROFILE: "/class-teacher/profile",
};

export const SUBJECT_TEACHER_PATHS = {
    DASHBOARD: "/subject-teacher/dashboard",
    MANAGE_MARKS: "/subject-teacher/manage-marks",
    RESULTS: "/subject-teacher/results",
    SETTINGS: "/subject-teacher/settings",
    PROFILE: "/subject-teacher/profile",
};

export const OFFICE_STAFF_PATHS = {
    DASHBOARD: "/office-staff/dashboard",
    STUDENTS: "/office-staff/students",
    FEES: "/office-staff/fees",
    CERTIFICATES: "/office-staff/certificates",
    SETTINGS: "/office-staff/settings",
    PROFILE: "/office-staff/profile",
};