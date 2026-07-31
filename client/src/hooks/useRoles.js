import { useContext } from "react";
import RoleContext from "../context/RoleContext";

const useRoles = function(){
    return useContext(RoleContext);
};

export default useRoles;