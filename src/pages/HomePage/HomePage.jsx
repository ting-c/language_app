import React from "react";
import './HomePage.styles.scss';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const HomePage = () => (
	<div className="HomePage">
		<div className="header">Welcome to KOLEARN</div>
		<Link to='/overview'><Button	className="get-started-button">
			Get Started
		</Button></Link>
		<Link to='/signin'><Button className="sign-in-button">
      Sign In
    </Button></Link>
	</div>
);

export default HomePage;
