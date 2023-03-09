import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, createContext, useContext, useEffect } from "react";
import { getAuth, RecaptchaVerifier, createUserWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { Donor } from '../firebase/types';
import { setDocument, getDocument } from "../firebase/functions";
import { useNavigation } from "@react-navigation/core";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signOut: () => void;
  signUp: (values: any) => void;
  signIn: (values: any) => void;
  confirmSMS: (sms: any) => void;
}

interface SignUpParams {
  name: string;
  email: string;
}

interface SignInParams {
  phone: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<React.PropsWithChildren<{children: any}>> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
    let uid = await SecureStore.getItemAsync("uid") as string;
    let phone = await SecureStore.getItemAsync("phone") as string;
    
    const donor: Donor = {
      name: values.name,
      email: values.email,
      phone,
    }

    setDocument("donor", uid, donor);

    navigation.navigate("Onboarding");
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
      await SecureStore.setItemAsync("phone", result.user.phoneNumber);

      try {
        const donorData = await getDocument("donor", result.user.uid);
        if(!donorData.exists()) {
          navigation.navigate("SignUp");
        }
      } finally {
        navigation.navigate("Onboarding");
      }

    }).catch((error: any) => {
      console.log(error);
    });
    
  }

  async function signIn(values: SignInParams) { 
    const auth = getAuth();
    setLoading(true);

    generateRecaptcha(auth);
    let verifier = window.recaptchaVerifier;
    let phone = '+55'+values.phone.replace('-','');

    signInWithPhoneNumber(auth, phone, verifier)
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
