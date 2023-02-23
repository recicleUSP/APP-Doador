import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, createContext, useContext, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Donor } from '../firebase/types';
import { setDocument } from "../firebase/functions";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signOut: () => void;
  signIn: (values: any) => void;
}

interface SignInParams {
  phone: string;
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren<{children: any}>> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync("token");
      if (token) setSigned(true);
      else setSigned(false);

      setTimeout(() => SplashScreen.hideAsync(), 250);
    }

    fetchToken();
  }, []);

  async function signIn(values: SignInParams) { 
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const donorId = userCredential.user.uid;

        const donor: Donor = {
          name: values.name,
          email: values.email,
          phone: values.phone,
        }

        setDocument("donor", donorId, donor);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    /*setLoading(true);
    await SecureStore.setItemAsync("token", "true");

    setTimeout(() => {
      setSigned(true);
      setLoading(false);
    }, 1000);
    */
  }

  async function signOut() {
    setLoading(true);
    await SecureStore.deleteItemAsync("token");

    setSigned(false);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        signIn,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
