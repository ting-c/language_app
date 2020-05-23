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
    }, 
  );
  const [numberSino, setNumberSino] = useState(
    JSON.parse(localStorage.getItem('localNumberSino')) || false
  );
  const [numberNative, setNumberNative] = useState(
		JSON.parse(localStorage.getItem("localNumberNative")) || false
	);
  const [basicConsonants, setbasicConsonants] = useState(
		JSON.parse(localStorage.getItem("localBasicConsonants")) || false
	);
  const [basicVowels, setbasicVowels] = useState(
		JSON.parse(localStorage.getItem("localBasicVowels")) || false
	);
  const [doubleVowels, setdoubleVowels] = useState(
		JSON.parse(localStorage.getItem("localDoubleVowels")) || false
    );
  
  const toggleNumberSino = (val) => setNumberSino(val);
  const toggleNumberNative = (val) => setNumberNative(val);
  const toggleBasicConsonants = (val) => setbasicConsonants(val);
  const toggleBasicVowels = (val) => setbasicVowels(val);
  const toggleDoubleVowels = (val) => setdoubleVowels(val);

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
        toggleDoubleVowels
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;