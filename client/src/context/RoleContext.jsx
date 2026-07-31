import { createContext, useEffect, useState } from "react";

import { getRoles } from "../services/roleServices";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  ---------------------------------------------------
  Load Roles
  ---------------------------------------------------
  */

  const loadRoles = async () => {
    try {
      const response = await getRoles();

      if (response.success) {
        setRoles(response.roles); 
      }
    } catch (error) {
      console.error("Unable to load roles.", error);
    } finally {
      setLoading(false);
    }
  };

  /*
  ---------------------------------------------------
  Load initial 
  ---------------------------------------------------
  */

  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <RoleContext.Provider
      value={{
        roles,
        loading,
        refreshRoles: loadRoles,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export default RoleContext;