import React, { useContext } from 'react';
import './NavBar.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from './../../img/logo.png';
import Avatar from '../Avatar/Avatar';
import { ProgressContext } from '../../providers/progress_provider';
import { firebaseAuth } from '../../firebase/firebase';

const NavBar = ({ history, currentUser }) => {
	const { resetProgress } = useContext(ProgressContext);

	const handleResetProgress = () => {
		if (window.confirm('Are you sure you wish to reset your progress ?')) {
			resetProgress();
		};
	};

	const handleSignOut = async () => {
		try {
			await firebaseAuth.signOut();
			alert('Sign out succesfully');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Navbar className="NavBar" sticky="top">
			<Navbar.Brand className="logo-container">
				<Link to="/">
					<img className="logo" src={logo} alt="Logo" />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="right-container">
					<NavDropdown className="dropdown" alignRight title={<Avatar />}>
						{currentUser ? (
							<NavDropdown.Item
								className="dropdown-item"
								onClick={handleSignOut}
							>
								Sign Out
							</NavDropdown.Item>
						) : (
							<NavDropdown.Item
								className="dropdown-item"
								onClick={() => history.push("/signin")}
							>
								Sign In
							</NavDropdown.Item>
						)}
						<NavDropdown.Item
							className="dropdown-item"
							onClick={handleResetProgress}
						>
							Reset Progress
						</NavDropdown.Item>
						<NavDropdown.Item
							className="dropdown-item"
							onClick={() => history.push("/news")}
						>
							News
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);};

export default withRouter(NavBar);