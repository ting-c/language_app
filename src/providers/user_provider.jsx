import React, { useState, createContext, useEffect } from "react";
import { firebaseAuth, firestore } from '../firebase/firebase';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
		const unsubscribeFromAuth = firebaseAuth.onAuthStateChanged( async (user) => {
			if (user) {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        if (!currentUser) { setCurrentUser(userData) };    
			} else {
				setCurrentUser(null);
			}
		});
		return () => {
			unsubscribeFromAuth();
		};
	});
	
	return (
		<UserContext.Provider
			value={{
				currentUser
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
