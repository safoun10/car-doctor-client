import React from "react";
import { Link } from "react-router-dom";
import logo from "../.././../assets/logo.svg";
import { BsHandbag, BsHandbagFill, BsSearch } from "react-icons/bs";
import "./TopNav.css"

const TopNav = () => {
	return (
		<div className="d-flex justify-content-between align-items-center px-5 py-4">
			<div>
				<img className="" src={logo} alt="logo" />
			</div>
			<div className="d-flex gap-5">
				<Link className="text-decoration-none text-one fw-bold fs-5">
					Home
				</Link>
				<Link className="text-decoration-none text-one fw-bold fs-5">
					About
				</Link>
				<Link className="text-decoration-none text-one fw-bold fs-5">
					Services
				</Link>
				<Link className="text-decoration-none text-one fw-bold fs-5">
					Blog
				</Link>
				<Link className="text-decoration-none text-one fw-bold fs-5">
					Contact
				</Link>
			</div>
			<div className="d-flex justify-content-center align-items-center gap-4">
				<div>
					<BsHandbag className="fs-4 text-one"></BsHandbag>
				</div>
				<div>
					<BsSearch className="fs-4 text-one"></BsSearch>
				</div>
				<div>
					<div className="btn fs-4 btn-appointment">Appointment</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
