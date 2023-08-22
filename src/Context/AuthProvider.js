import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)

export const ThemeContext = createContext()

const AuthProvider = ({ children }) => {

  const [theme, setTheme] = useState(false)

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const providerLogin = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }
  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }
  const passwordReset = (email) => {
    setLoading(false);
    return sendPasswordResetEmail(auth, email)


  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('state change,', currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])
  console.log(theme);

  const authInfo = {
    user,
    providerLogin,
    createUser,
    singIn,
    logOut,
    loading,
    updateUserProfile,
    verifyEmail,
    passwordReset,

  }
  const data = {
    setTheme,
    theme
  }
  return (
    <ThemeContext.Provider value={data}>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;