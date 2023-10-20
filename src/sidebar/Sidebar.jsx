import React from "react";
import "../sidebar/sidebar.css";
import { Link } from "react-router-dom";
// import logo from "../Image/logo.png";
import { RiDashboardLine } from "react-icons/ri";

import { CiGlobe } from "react-icons/ci";
// import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
	console.log(window.location.pathname);
	return (
		<aside className="sidebar">
			{/* <div className="logo">
				<img src={logo} alt="logo" style={{ height: "34px", width: "100%" }} />
			</div> */}
			{/* className={window.location.pathname === sbData.path ? "sidelinks2":"sidelinks" */}
			<div className="top">
				<Link
					to=""
					className={
						window.location.pathname === "dashboard" ? "active" : "link"
					}>
					<RiDashboardLine className="icon" />{" "}
					<span className="txt">Dashboard</span>{" "}
				</Link>

				<Link
					to="Profile"
					className={
						window.location.pathname === "services" ? "active" : "link"
					}>
					<CiGlobe className="icon" />{" "}
					<span span className="txt">
						Services
					</span>
				</Link>
			</div>
			<div className="bottom">
				{/* <Link
					to="settings"
					className={
						window.location.pathname === "settings" ? "active" : "link"
					}>
					<CiSettings className="icon" /> <span className="txt">Settings</span>
				</Link> */}

				<Link
					to="/login"
					className={window.location.pathname === "/login" ? "active" : "link"}>
					{" "}
					<CiLogout className="icon" /> <span className="txt">Logout</span>{" "}
				</Link>
			</div>
		</aside>
	);
};

export default Sidebar;