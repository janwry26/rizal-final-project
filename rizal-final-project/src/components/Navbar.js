import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import logo from '../assets/logo.png';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo">
                <img src={logo}/>
            </div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Group no.</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;