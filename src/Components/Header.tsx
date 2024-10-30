import { useState } from "react";
// import data
import menuItems from "../data";
const Header = () => {
	// states
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	//renders
	// render menu items

	const renderMenuItems = () => {
		return menuItems.map((item, index) => {
			return (
				<li key={index} className="py-2 ">
					<a href={item.href}>{item.name}</a>
				</li>
			);
		});
	};

	return (
		<header className="bg-white flex justify-between items-center sm:flex-row gap-5 md:gap-8 lg:gap-10 h-16 px-4 md:px-8 lg:px-16">
			
			<div className="navbar flex md:hidden  items-center gap-6 justify-end">
				<button
					className="menu-button w-4 h-4 flex justify-center items-center flex-shrink-0"
					aria-label="Toggle navigation"
					onClick={toggleMenu}
				>
					<img src="../images/icon-menu.svg" alt="hamburger" />
				</button>
				<div
					className={`mobile-menu ${isMenuOpen ? "flex" : "hidden"} fixed top-0 left-0 w-1/2 h-full bg-white flex-col justify- items-start z-50 shadow-md p-4`}
				>
					<div className="close-wrapper w-12 h-12 flex justify-center ">
						<button
							className=" top-4 "
							aria-label="Close navigation"
							onClick={toggleMenu}
						>
							<img src="../images/icon-close.svg" alt="close" />
						</button>
					</div>
					<ul className="flex flex-col gap-4 p-4 font-bold">
						{renderMenuItems()}
					</ul>
				</div>
			</div><div className="logo flex-1 md:flex-initial ">
				<img src="../images/logo.svg" alt="logo" />
			</div>

			<nav className="navbar hidden md:flex md items-center gap-6 h-full">
				<ul className="flex gap-6 items-center h-full">
					<li className="h-full content-center hover:border-b-2 hover:border-b-orange-500">
						<a href="#">Collection</a>
					</li>
					<li className="h-full content-center hover:border-b-2 hover:border-b-orange-500">
						<a href="#">Men</a>
					</li>
					<li className="h-full content-center hover:border-b-2 hover:border-b-orange-500">
						<a href="#">Women</a>
					</li>
					<li className="h-full content-center hover:border-b-2 hover:border-b-orange-500">
						<a href="#">About</a>
					</li>
					<li className="h-full content-center hover:border-b-2 hover:border-b-orange-500">
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<div className="info flex items-center gap-3">
				<div className="cart relative w-6 h-6">
					<img src="../images/icon-cart.svg" alt="cart" className="" />
					<span className="cart-items absolute bottom-6 right-0 left-5 text-white bg-black rounded-full w-3 h-3 flex justify-center items-center"></span>
				</div>
				<div className="user h-6 w-6">
					<img src="../images/image-avatar.png" alt="user" className=" " />
				</div>
			</div>
		</header>
	);
};

export default Header;
