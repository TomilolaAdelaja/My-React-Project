import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (owner) => {
    setUser(owner);
    localStorage.setItem('user', JSON.stringify(owner))
  }
  
  const logout = (owner) => {
    setUser(null);
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )

};

// // export const useAuth = () => {
//     const context = useContext(AuthContext);

//     if(!context){
//         throw new Error('Fimile')
//     }
//     return context;
// }
