import React, { useState, createContext, useEffect } from 'react';

export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {

  const INITIAL_STATE = {
		number_sino: false,
		number_native: false,
		basic_consonants: false,
		basic_vowels: false,
		double_vowels: false,
		basic_words_1: false,
		basic_words_2: false,
		basic_words_3: false,
		basic_words_4: false,
		basic_words_5: false,
  };

  const existInLocalStorage = localStorage.getItem('progressState');  

  const [progressState, setProgressState] = useState(
    existInLocalStorage ? JSON.parse(existInLocalStorage) : INITIAL_STATE);

  useEffect(() => {
    
    localStorage.setItem('progressState', JSON.stringify(progressState));
  });

  const handleSetProgressState = (lesson, val) => { 
    if (progressState[lesson] === false) {
      setProgressState( { ...progressState, [lesson] : val } );
    }; 
  };

  const resetProgress = () => {
    setProgressState(INITIAL_STATE);
  };

  const allNumberCompleted = (
    progressState.number_sino && 
    progressState.number_native
  );

  const allAlphabetCompleted = (
    progressState.basic_consonants &&
    progressState.basic_vowels &&
    progressState.double_vowels &&
    progressState.basic_words_1 &&
    progressState.basic_words_2 &&
    progressState.basic_words_3 &&
    progressState.basic_words_4 &&
    progressState.basic_words_5
  );

  return (
    <ProgressContext.Provider
      value={{
        resetProgress,
        handleSetProgressState,
        progressState,
        allNumberCompleted,
        allAlphabetCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;