import React, { useState, createContext, useEffect, useContext } from 'react';
import { firestore } from '../firebase/firebase';
import { UserContext } from './user_provider';

export const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const ALL_NUMBER_TOPICS = [
    'number_sino',
    'number_native'
  ];
  const ALL_ALPHABET_TOPICS = [
    'basic_consonants',
    'basic_vowels',
    'double_vowels',
    'basic_words_1',
    'basic_words_2',
    'basic_words_3',
    'basic_words_4',
    'basic_words_5',
  ];
  
  const setInitialState = () => {
    const INITIAL_STATE = {};
    [ ...ALL_NUMBER_TOPICS, ...ALL_ALPHABET_TOPICS ].forEach(
      topic => INITIAL_STATE[topic] = false
      );
      return INITIAL_STATE;
    };
    
  const { currentUser } = useContext(UserContext);
    
  const setUserProgressInFirestore = async () => {
    try {
      await firestore.collection('progress').doc(currentUser.uid).set(progressState);
    } catch (err) {
      console.log(err);
    }
  };
  
	const getUserProgressFromFirestore = async () => {
		const userProgressDoc = await firestore
			.collection("progress")
			.doc(currentUser.uid)
      .get();

    if (userProgressDoc.exists) { 
      return userProgressDoc.data()       
    } else {
      await setUserProgressInFirestore();
      return getUserProgressFromFirestore();
    }
  };
  
  const existInLocalStorage = localStorage.getItem('progressState');

  const getUserProgressFromLocalStorage = () => (
    existInLocalStorage ? JSON.parse(existInLocalStorage) : setInitialState()
  );

  const getUserProgress = () => ( currentUser ? 
    getUserProgressFromFirestore() : getUserProgressFromLocalStorage() 
  );

  const [progressState, setProgressState] = useState( getUserProgress() );

  console.log(progressState);

  useEffect( () => {
    currentUser ? setUserProgressInFirestore() : 
    localStorage.setItem('progressState', JSON.stringify(progressState));
  });

  const handleSetProgressState = (lesson, val) => { 
    if (!progressState[lesson]) {
      setProgressState( { ...progressState, [lesson] : val } );
    }; 
  };
  
  const resetProgress = () => setProgressState(setInitialState);
  
  const progressChecker = {    
    calculate : (topic) => {
      switch (topic) {
        case 'number':
          return ALL_NUMBER_TOPICS.reduce( (trueCount, topic) =>  
          trueCount + (progressState[topic] ? 1 : 0), 0 ) / ALL_NUMBER_TOPICS.length;
        case 'alphabet':
          return ALL_ALPHABET_TOPICS.reduce( (trueCount, topic) => 
          trueCount + (progressState[topic] ? 1 : 0), 0 ) / ALL_ALPHABET_TOPICS.length;
        default:
      }
    },
    isCompleted : topic => progressChecker.calculate(topic) === 1
  };
  
  const isAllNumberCompleted = progressChecker.isCompleted("number");
  const isAllAlphabetCompleted = progressChecker.isCompleted("alphabet");
  
  return (
    <ProgressContext.Provider
      value={{
        resetProgress,
        handleSetProgressState,
        progressState,
        isAllNumberCompleted,
        isAllAlphabetCompleted,
      }}
    > {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;