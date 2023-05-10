import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (profile) => {
      setUser(profile);
    });

    return () => {
        currentUser()
    }
  }, []);

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export default AuthContext;
