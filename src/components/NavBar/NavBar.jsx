import React from 'react';
import './NavBar.styles.scss';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from './../../img/logo.png';
import avatar from './../../img/avatar.png';

const NavBar = () => (
	<Navbar className="NavBar">
		<Navbar.Brand className="logo-container">
			<Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
		</Navbar.Brand>
		<Navbar.Toggle />
		<Navbar.Collapse>
			<Nav className="right-container">
				<NavDropdown
					className="dropdown"
          alignRight
					title={<img className="avatar" src={avatar} alt="Avatar" />}
				>
					<NavDropdown.Item className='dropdown-item'>Sign In</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;