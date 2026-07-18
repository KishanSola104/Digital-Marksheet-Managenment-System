import Dashboard from "../pages/classTeacher/Dashboard";
import SubjectsTeachers from "../pages/classTeacher/SubjectsTeachers";
import Exams from "../pages/classTeacher/Exams";
import Results from "../pages/classTeacher/Results";
import ReportCard from "../pages/classTeacher/ReportCard";
import Settings from "../pages/classTeacher/Settings";

const classTeacherRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "subjects",
    element: <SubjectsTeachers />,
  },
  {
    path: "exams",
    element: <Exams />,
  },
  {
    path: "results",
    element: <Results />,
  },
  {
    path: "report-card",
    element: <ReportCard />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
];

export default classTeacherRoutes;
