import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCAAC1963H-F1zfeuxewA1ibL2FOCZ0ZTg",
	authDomain: "korean-app-c9b8e.firebaseapp.com",
	databaseURL: "https://korean-app-c9b8e.firebaseio.com",
	projectId: "korean-app-c9b8e",
	storageBucket: "korean-app-c9b8e.appspot.com",
	messagingSenderId: "234154171232",
	appId: "1:234154171232:web:fe92c1d0d464c0d7c0dc05",
	measurementId: "G-BKSFJG1KZB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = async () => {
  const authResult = await firebase.auth().signInWithPopup(provider);
  const { user } = authResult;

  const userExistsInFirestore = await firestore.collection('users').doc(user.uid).get();
  if (userExistsInFirestore.exists) return;
  // set user document in firestore if not already exists
  try {
    const { uid, displayName, email } = user;
    firestore.collection('users').doc(uid).set({
      name: displayName,
      email,
      createdAt: new Date()
    })
  } catch(err) {
    console.log(err);
  };
};

export const signIn = async (email, password) => {
	if (!email || !password) {
		alert("Email and password must be entered to sign in");
		return;
	};
	try {
		await firebaseAuth.signInWithEmailAndPassword(email, password);
	} catch (err) {
		alert(err.message);
	};
};

export const signUp = async (name, email, password, confirmPassword) => {
  if (password !== confirmPassword) {
		alert("Please enter the same passwords");
		return;
	}
	try {
		const userCred = await firebaseAuth.createUserWithEmailAndPassword(
			email,
			password
		);
		// unique user Id
		const {
			user: { uid },
		} = userCred;
		firestore.collection("users").doc(uid).set({
			name,
			email,
			createdAt: new Date(),
    });
    alert('You have successfully registered and logged in.')
	} catch (err) {
		alert(err.message);
	}
}
