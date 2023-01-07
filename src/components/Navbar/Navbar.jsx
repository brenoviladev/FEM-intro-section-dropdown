import React, { useState } from "react";

import "./navbar.css";
import { logo, icon_menu } from "../../images";
import Menu from "../Menu/Menu";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleMenu = () => setToggleMenu(!toggleMenu);

	return (
		// mb = Mobile | dt = Desktop
		<nav className="nav">
			<img src={logo} alt="snap logo" className="nav__logo" />

			<div className="nav-dtMenu__container">
				<Menu handleMenu={handleMenu} />
			</div>

			<div className="nav-mbMenu__container">
				{/* Open menu icon */}
				{!toggleMenu ? (
					<img
						src={icon_menu}
						alt="open menu icon"
						onClick={handleMenu}
						className="nav-mbMenu__openMenu"
					/>
				) : (
					<div className="nav-mbMenu">
						{/* Transparent dark background */}
						<div className="nav-mbMenu__darkBg" />

						<Menu handleMenu={handleMenu} />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
