import React, { useState } from "react";
import "./SignUpContainer.styles.scss";
import { signUp } from '../../firebase/firebase';

const SignUpContainer = ({ toggleDisplaySignIn }) => {

  const [name, updateName] = useState(null);
  const [email, updateEmail] = useState(null);
  const [password, updatePassword] = useState(null);
  const [confirmPassword, updateConfirmPassword] = useState(null);

  const handleSignUp = (e) => {
		e.preventDefault();
		signUp(name, email, password, confirmPassword);
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
