import React from 'react';
import './NavBar.styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../img/logo.png';
import avatar from './../../img/avatar.png';

const NavBar = () => (
	<Navbar className="NavBar">
		<Navbar.Brand className="logo-container">
			<img className="logo" src={logo} alt="Logo" />
		</Navbar.Brand>
		<Navbar.Toggle />
		<Navbar.Collapse>
			<NavDropdown
				title={ <img className="avatar" src={avatar} alt="Avatar" /> }
			>
				<NavDropdown.Item>Sign In</NavDropdown.Item>
			</NavDropdown>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;