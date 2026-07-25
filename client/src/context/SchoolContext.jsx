import { createContext, useEffect, useState } from "react";

export const SchoolContext = createContext(null);

export function SchoolProvider({ children }) {
  const [school, setSchool] = useState(null);
  const [schoolToken, setSchoolToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSchool = localStorage.getItem("school");
    const storedToken = localStorage.getItem("schoolToken");

    if (storedSchool && storedToken) {
      setSchool(JSON.parse(storedSchool));
      setSchoolToken(storedToken);
    }

    setLoading(false);
  }, []);

  const loginSchool = (schoolData, token) => {
    localStorage.setItem("school", JSON.stringify(schoolData));
    localStorage.setItem("schoolToken", token);

    setSchool(schoolData);
    setSchoolToken(token);
  };

  const logoutSchool = () => {
    localStorage.removeItem("school");
    localStorage.removeItem("schoolToken");

    setSchool(null);
    setSchoolToken(null);
  };

  return (
    <SchoolContext.Provider
      value={{
        school,
        schoolToken,
        loading,
        loginSchool,
        logoutSchool,
        isSchoolAuthenticated: !!schoolToken,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}