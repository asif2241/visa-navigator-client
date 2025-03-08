import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creating user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
