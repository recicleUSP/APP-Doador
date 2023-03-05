import React, { useState, createContext, useContext, useEffect } from "react";

interface CommonContextData {
  loading: boolean;
  devAlert: boolean;
  setDevAlert: (state: boolean) => void;
}

const CommonContext = createContext<CommonContextData>({} as CommonContextData);

export const CommonProvider: React.FC<React.PropsWithChildren<{children: any}>> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [devAlert, setDevAlert] = useState(false);

  useEffect(() => {}, []);

  return (
    <CommonContext.Provider
      value={{
        loading,
        devAlert,
        setDevAlert,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function useCommon() {
  return useContext(CommonContext);
}
