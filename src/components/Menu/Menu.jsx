import React, { useState } from "react";

import "./menu.css";
import {
	icon_arrow_down,
	icon_arrow_up,
	icon_todo,
	icon_calendar,
	icon_reminders,
	icon_planning,
	icon_close_menu,
} from "../../images";

const Menu = ({ handleMenu }) => {
	const [toggleFeatures, setToggleFeatures] = useState(false);
	const [toggleCompany, setToggleCompany] = useState(false);

	const handleFeatures = () => setToggleFeatures(!toggleFeatures);
	const handleCompany = () => setToggleCompany(!toggleCompany);

	return (
		<div className="menu">
			{/* Close menu icon */}
			<img
				src={icon_close_menu}
				alt="close menu icon"
				onClick={handleMenu}
				className="menu__closeMenu"
			/>

			{/* Links */}
			<ul className="menu-links">
				{/* Features dropdown */}
				<li className="menu-links__features" onClick={handleFeatures}>
					Features
					{!toggleFeatures ? (
						<img src={icon_arrow_down} alt="arrow down" />
					) : (
						<img src={icon_arrow_up} alt="arrow up" />
					)}
				</li>
				{toggleFeatures && (
					<ul className="features-dropdown dropdown">
						<li>
							<img src={icon_todo} alt="icon todo" /> Todo List
						</li>
						<li>
							<img src={icon_calendar} alt="icon calendar" />
							Calendar
						</li>
						<li>
							<img src={icon_reminders} alt="icon reminders" />
							Reminders
						</li>
						<li>
							<img src={icon_planning} alt="icon planning" />
							Planning
						</li>
					</ul>
				)}

				{/* Company dropdown */}
				<li className="menu-links__company" onClick={handleCompany}>
					Company
					{!toggleCompany ? (
						<img src={icon_arrow_down} alt="arrow down" />
					) : (
						<img src={icon_arrow_up} alt="arrow up" />
					)}
				</li>
				{toggleCompany && (
					<ul className="company-dropdown dropdown">
						<li>History</li>
						<li>Our Team</li>
						<li>Blog</li>
					</ul>
				)}

				<li>Careers</li>
				<li>About</li>
			</ul>

			{/* Auth */}
			<div className="menu-auth">
				<p>Login</p>
				<div className="menu-auth__register">Register</div>
			</div>
		</div>
	);
};

export default Menu;
