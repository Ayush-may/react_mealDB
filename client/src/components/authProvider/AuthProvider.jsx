import React, { createContext, useEffect, useState } from "react";
import axiosConfig from "../../api/axiosConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const [isAuth, setAuth] = useState(false);

 useEffect(() => {
  (async () => {
   try {
    const response = await axiosConfig.get("/authuser");
    setAuth(true);
   } catch (error) {
    setAuth(false);
   }

   console.log("user logged in ?--> ", isAuth);
  })();
 }, []);

 return (
  <>
   <AuthContext.Provider value={{ isAuth, setAuth }}>
    {children}
   </AuthContext.Provider>
  </>
 );
};

export default AuthProvider;
