import React, { useState } from "react";
import "./SignUpContainer.styles.scss";
import { firebaseAuth, firestore } from '../../firebase/firebase';

const SignUpContainer = ({ toggleDisplaySignIn }) => {

  const [name, updateName] = useState(null);
  const [email, updateEmail] = useState(null);
  const [password, updatePassword] = useState(null);
  const [confirmPassword, updateConfirmPassword] = useState(null);

  const handleSignUp = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			 alert('Please enter the same passwords'); 
			 return 
		};
		try { 
			const userCred = await firebaseAuth.createUserWithEmailAndPassword(email, password);
			console.log(userCred);
			// unique user Id
			const { user: { uid } } = userCred;
			firestore.collection('users').doc(uid).set({
				name,
				email,
				createdAt: new Date()
			})
		} catch (err) {
			alert(err.message);
		}
  };

	return (
		<div className="sign-up-container">
			<form>
				<div className="input-fields">
					<input
						className="input"
						type="text"
						placeholder="Name"
						onChange={(e) => updateName(e.target.value)}
						required
					/>
					<div className="divider" />
					<input
						className="input"
						type="email"
						placeholder="Email"
						onChange={(e) => updateEmail(e.target.value)}
						required
					/>
					<div className="divider" />
					<input
						className="input"
						type="password"
						placeholder="Password"
						onChange={(e) => updatePassword(e.target.value)}
						required
					/>
					<div className="divider" />
					<input
						className="input"
						type="password"
						placeholder="Confirm Password"
						onChange={(e) => updateConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button
					type="submit"
					className="sign-up-button"
					onClick={(e) => handleSignUp(e)}
				>
					Sign up
				</button>
			</form>
			<span>Already have an account? </span>
			<span
				className="sign-in-toggle"
				onClick={() => toggleDisplaySignIn(true)}
			>
				Sign In
			</span>
		</div>
	);
};

export default SignUpContainer;
