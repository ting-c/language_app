import React, { useState } from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignInContainer from '../../components/SignInContainer/SignInContainer';
import SignUpContainer from '../../components/SignUpContainer/SignUpContainer';

const SignInAndSignUpPage = () => {

	const [displaySignIn, toggleDisplaySignIn] = useState(true);

	return (
		<div className="sign-in-and-sign-up-page">
			{displaySignIn ? (
				<div>
					<SignInContainer {...{ toggleDisplaySignIn }} />
				</div>
			) : (
				<div>
					<SignUpContainer {...{ toggleDisplaySignIn }} />
				</div>
			)}
		</div>
	)
	
};

export default SignInAndSignUpPage;
