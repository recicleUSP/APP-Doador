import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, createContext, useContext, useEffect } from "react";
import { getAuth, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { Donor } from '../firebase/types';
import { setDocument } from "../firebase/functions";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signOut: () => void;
  signUp: (values: any) => void;
  signIn: (values: any) => void;
  confirmSMS: (sms: string) => void;
}

interface SignUpParams {
  phone: string;
  name: string;
  email: string;
  password: string;
}

interface SignInParams {
  phone: string;
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

  async function signUp(values: SignUpParams) { 
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
  }


  const generateRecaptcha = (auth: any) => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response: any) => {

      }
    }, auth);
  }

  async function confirmSMS(sms: string) {
    let confirmationResult = window.confirmationResult;

    confirmationResult.confirm(sms).then(async (result: any) => {
      await SecureStore.setItemAsync("user", result.user);
      await SecureStore.setItemAsync("uid", result.user.uid);

    }).catch((error: any) => {
      console.log(error);
    });
    
  }

  async function signIn(values: SignInParams) { 
    const auth = getAuth();
    setLoading(true);

    generateRecaptcha(auth);
    let verifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, values.phone, verifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
      console.log(error);
    });

    setTimeout(() => {
      setSigned(true);
      setLoading(false);
    }, 1000);
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
        confirmSMS,
        signIn,
        signUp,
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
