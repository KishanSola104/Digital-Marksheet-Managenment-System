import { createContext, useEffect, useState } from "react";

export const SchoolContext = createContext(null);

export function SchoolProvider({ children }) {
  const [school, setSchool] = useState(null);
  const [schoolToken, setSchoolToken] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
  ---------------------------------------------------
  Restore School Session
  ---------------------------------------------------
  */

  useEffect(() => {
    try {
      const storedSchool = localStorage.getItem("school");
      const storedToken = localStorage.getItem("schoolToken");

      if (storedSchool && storedToken) {
        setSchool(JSON.parse(storedSchool));
        setSchoolToken(storedToken);
      }
    } catch (error) {
      console.error("Failed to restore school session:", error);

      localStorage.removeItem("school");
      localStorage.removeItem("schoolToken");
    } finally {
      setLoading(false);
    }
  }, []);

  /*
  ---------------------------------------------------
  Login School
  ---------------------------------------------------
  */

  const loginSchool = (schoolData, token) => {
    localStorage.setItem("school", JSON.stringify(schoolData));
    localStorage.setItem("schoolToken", token);

    setSchool(schoolData);
    setSchoolToken(token);
  };

  /*
  ---------------------------------------------------
  Logout School
  ---------------------------------------------------
  */

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

        isSchoolAuthenticated: !!school && !!schoolToken,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}

export default SchoolContext;