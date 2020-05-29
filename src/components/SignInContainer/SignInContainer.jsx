import React, { useState } from "react";
import "./SignInContainer.styles.scss";
import GoogleIcon from '../../img/google-icon.png';
import { googleSignIn, signIn } from '../../firebase/firebase';

const SignInContainer = ({ toggleDisplaySignIn }) => {

  const [email, updateEmail] = useState(null);
  const [password, updatePassword] = useState(null);

  const handleSignIn = (e, isGoogle) => {
		e.preventDefault();
		isGoogle ? googleSignIn() :	signIn(email, password);
  };

	return (
		<div className="sign-in-container">
			<form>
				<div className="input-fields">
					<input
						className="input"
						type="email"
						placeholder="Email"
						onChange={(e) => updateEmail(e.target.value)}
					/>
					<div className="divider" />
					<input
						className="input"
						type="password"
						placeholder="Password"
						onChange={(e) => updatePassword(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="sign-in-button"
					onClick={(e) => handleSignIn(e, false)}
				>
					Sign in
				</button>
				<button className="google-sign-in-button" onClick={(e) => handleSignIn(e, true)}>
					<img src={GoogleIcon} className="google-icon" alt="google icon" />
					<span>Google</span>
				</button>
			</form>
			<span>Don't have an account? </span>
			<span
				className="sign-in-toggle"
				onClick={() => toggleDisplaySignIn(false)}
			>
				Sign Up
			</span>
		</div>
	);
};

export default SignInContainer;
