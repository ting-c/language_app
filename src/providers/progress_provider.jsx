import React, { useState, createContext } from 'react';

export const ProgressContext = createContext({
  numberSino: false,
  setNumberSino: () => {},
  numberNative: false,
  setNumberNative: () => {},
  basicConsonants: false,
  setBasicConsonants: () => {},
  basicVowels: false,
  setBasicVowels: () => {},
  doubleVowels: false,
  setDoubleVowels: () => {},
});

const ProgressProvider = ({ children }) => {
  const [numberSino, setNumberSino] = useState(false);
  const [numberNative, setNumberNative] = useState(false);
  const [basicConsonants, setbasicConsonants] = useState(false);
  const [basicVowels, setbasicVowels] = useState(false);
  const [doubleVowels, setdoubleVowels] = useState(false);

  const toggleNumberSino = (val) => setNumberSino(val);
  const toggleNumberNative = (val) => setNumberNative(val);
  const toggleBasicConsonants = (val) => setbasicConsonants(val);
  const toggleBasicVowels = (val) => setbasicVowels(val);
  const toggleDoubleVowels = (val) => setdoubleVowels(val);


  return (
    <ProgressContext.Provider
      value={{
        numberSino, 
        numberNative, 
        basicConsonants, 
        basicVowels,
        doubleVowels,
        toggleNumberSino,
        toggleNumberNative,
        toggleBasicConsonants,
        toggleBasicVowels,
        toggleDoubleVowels
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;