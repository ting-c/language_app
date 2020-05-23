import React, { useState, createContext, useEffect } from 'react';

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
  useEffect( () => {    
    localStorage.setItem('localNumberSino', JSON.stringify(numberSino));
    localStorage.setItem('localNumberNative', JSON.stringify(numberNative));
    localStorage.setItem('localBasicConsonants', JSON.stringify(basicConsonants));
    localStorage.setItem('localBasicVowels', JSON.stringify(basicVowels));
    localStorage.setItem('localDoubleVowels', JSON.stringify(doubleVowels));
    localStorage.setItem("localDoubleVowels", JSON.stringify(basicWords1));
    }, 
  );
  const [numberSino, setNumberSino] = useState(
    JSON.parse(localStorage.getItem('localNumberSino')) || false
  );
  const [numberNative, setNumberNative] = useState(
		JSON.parse(localStorage.getItem("localNumberNative")) || false
	);
  const [basicConsonants, setBasicConsonants] = useState(
		JSON.parse(localStorage.getItem("localBasicConsonants")) || false
	);
  const [basicVowels, setBasicVowels] = useState(
		JSON.parse(localStorage.getItem("localBasicVowels")) || false
	);
  const [doubleVowels, setDoubleVowels] = useState(
		JSON.parse(localStorage.getItem("localDoubleVowels")) || false
  );
  const [basicWords1, setBasicWords1] = useState(
		JSON.parse(localStorage.getItem("localDoubleVowels")) || false
	);
  
  const toggleNumberSino = (val) => setNumberSino(val);
  const toggleNumberNative = (val) => setNumberNative(val);
  const toggleBasicConsonants = (val) => setBasicConsonants(val);
  const toggleBasicVowels = (val) => setBasicVowels(val);
  const toggleDoubleVowels = (val) => setDoubleVowels(val);
  const toggleBasicWords1 = (val) => setBasicWords1(val);

  const resetProgress = () => {
    setNumberSino(false);
    setNumberNative(false);
    setBasicConsonants(false);
    setBasicVowels(false);
    setDoubleVowels(false);
    setBasicWords1(false);
  }

  const number = (numberSino && numberNative) || false;
  const alphabet = (basicConsonants && basicVowels && doubleVowels) || false

  return (
    <ProgressContext.Provider
      value={{
        number,
        alphabet,
        numberSino, 
        numberNative, 
        basicConsonants, 
        basicVowels,
        doubleVowels,
        toggleNumberSino,
        toggleNumberNative,
        toggleBasicConsonants,
        toggleBasicVowels,
        toggleDoubleVowels,
        toggleBasicWords1,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;