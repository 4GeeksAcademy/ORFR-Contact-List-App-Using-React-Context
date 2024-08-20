import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook,faHouse}  from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-info"><FontAwesomeIcon icon={faHouse} /></span>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
			<div className="ml-auto">
				<Link to="/contacts">
					<span className="navbar-brand mb-0 h1 text-info"> <FontAwesomeIcon icon={faAddressBook} /></span>
				</Link>
			</div>
		</nav>
	);
};
