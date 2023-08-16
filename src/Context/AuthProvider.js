import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('state change,', currentUser);
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = { user, providerLogin, logOut }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;