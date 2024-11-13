// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../util/userSlice";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (currentUser) {
      setUser(currentUser);
      const {
        uid = null,
        email = null,
        displayName = null,
      } = currentUser || {};
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      // } else {
      //   dispatch(removeUser());
      //   // navigate("/");
      //   console.log("logout");
      //   window.location = "/";
      // }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
