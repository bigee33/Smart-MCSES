import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("adminLoggedIn", isAdminLoggedIn);
  }, [isAdminLoggedIn]);

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
