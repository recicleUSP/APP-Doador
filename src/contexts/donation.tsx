import React, { useState, createContext, useContext, useEffect } from "react";

interface DonationContextData {
  localType: string;
  numberOfType: number;
  paper: boolean;
  aluminum: boolean;
  plastic: boolean;
  bottlePet: boolean;
  glass: boolean;
  oil: boolean;
  metal: boolean;
  eletronic: boolean;
  battery: boolean;
  bagQuantity: number;
  boxQuantity: number;
  weight: number;
  observation: string;
  initialTime: number;
  finalTime: number;
  numberOfDay: number;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  period: string;


  setLocalType: (state: string) => void;
  setNumberOfType: (state: number) => void;
  setPaper: (state: boolean) => void;
  setAluminum: (state: boolean) => void;
  setPlastic: (state: boolean) => void;
  setBottlePet: (state: boolean) => void;
  setGlass: (state: boolean) => void;
  setOil: (state: boolean) => void;
  setMetal: (state: boolean) => void;
  setEletronic: (state: boolean) => void;
  setBattery: (state: boolean) => void;
  setBagQuantity: (state: number) => void;
  setBoxQuantity: (state: number) => void;
  setWeight: (state: number) => void;
  setObservation: (state: string) => void;
  setInitialTime: (state: number) => void;
  setFinalTime: (state: number) => void;
  setNumberOfDay: (state: number) => void;
  setMonday: (state: boolean) => void;
  setTuesday: (state: boolean) => void;
  setWednesday: (state: boolean) => void;
  setThursday: (state: boolean) => void;
  setFriday: (state: boolean) => void;
  setSaturday: (state: boolean) => void;
  setSunday: (state: boolean) => void;
  setPeriod: (state: string) => void;

  
}

const DonationContext = createContext<DonationContextData>({} as DonationContextData);

export const DonationProvider: React.FC<React.PropsWithChildren<{children: any}>> = ({ children }) => {
  const [localType, setLocalType] = useState('Null');
  const [numberOfType, setNumberOfType] = useState(0);
  const [paper, setPaper] = useState(false);
  const [aluminum, setAluminum] = useState(false);
  const [plastic, setPlastic] = useState(false);
  const [bottlePet, setBottlePet] = useState(false);
  const [glass, setGlass] = useState(false);
  const [oil, setOil] = useState(false);
  const [metal, setMetal] = useState(false);
  const [eletronic, setEletronic] = useState(false);
  const [battery, setBattery] = useState(false);
  const [bagQuantity, setBagQuantity] = useState(0);
  const [boxQuantity, setBoxQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  const [observation, setObservation] = useState('null');
  const [initialTime, setInitialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const [numberOfDay, setNumberOfDay] = useState(0);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [period, setPeriod] = useState('null');


  useEffect(() => {}, []);

  return (
    <DonationContext.Provider
      value={{
        localType,
        numberOfType,
        paper,
        aluminum,
        plastic,
        bottlePet,
        glass,
        oil,
        metal,
        eletronic,
        battery,
        bagQuantity,
        boxQuantity,
        weight,
        observation,
        initialTime,
        finalTime,
        numberOfDay,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        period,

        setLocalType,
        setNumberOfType,
        setPaper,
        setAluminum,
        setPlastic,
        setBottlePet,
        setGlass,
        setOil,
        setMetal,
        setEletronic,
        setBattery,
        setBagQuantity,
        setBoxQuantity,
        setWeight,
        setObservation,
        setInitialTime,
        setFinalTime,
        setNumberOfDay,
        setMonday,
        setTuesday,
        setWednesday,
        setThursday,
        setFriday,
        setSaturday,
        setSunday,
        setPeriod,
      }}

    >
      {children}
    </DonationContext.Provider>
  );
};

export function useDonation() {
  return useContext(DonationContext);
}
