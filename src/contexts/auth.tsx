import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, createContext, useContext, useEffect } from "react";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signOut: () => void;
  signIn: (data: any) => void;
}

interface SignInParams {
  phone: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
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

  async function signIn(data: SignInParams) {
    setLoading(true);
    await SecureStore.setItemAsync("token", "true");

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
        loading,
        signIn,
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
