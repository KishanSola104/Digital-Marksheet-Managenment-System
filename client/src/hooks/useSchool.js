import { useContext } from "react";
import { SchoolContext } from "../context/SchoolContext";

export default function useSchool() {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error(
      "useSchool must be used within a SchoolProvider."
    );
  }

  return context;
}