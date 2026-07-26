import { useContext } from "react";
import SchoolContext from "../context/SchoolContext";

function useSchoolAuth() {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error(
      "useSchoolAuth must be used within a SchoolProvider."
    );
  }

  return context;
}

export default useSchoolAuth;