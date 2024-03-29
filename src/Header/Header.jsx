import logoImg from "/src/assets/logo.png";
import mgGlass from "/src/assets/mgGlass.png";
import Star from "/src/assets/Star.jsx";
import "./Header.css";
import { useRef, useState } from "react";

function Header({ sendDataToParent }) {
	const searchEl = document.getElementsByClassName("search");
	const [searchCoin, setSearchCoin] = useState("");
	const inputRef = useRef();

	function showSearch() {
		searchEl[0].style.width = "17vw";
	}

	function handleInputChange(event) {
		setSearchCoin(event.target.value);
	}

	function findCoin(event) {
		if (searchCoin.trim() !== "") {
		}
	}

	const sendDataToParentHandler = () => {
		sendDataToParent(searchCoin);
	};

	return (
		<>
			<div className="header">
				<img className="logo" src={logoImg} />
				<div className="header-right-part">
					<div className="search-container">
						<button
							className="search-button"
							onClick={() => {
								showSearch(), findCoin(), sendDataToParentHandler();
							}}
						>
							<img className="mg-glass" src={mgGlass} />
						</button>
						<input
							className="search"
							type="text"
							placeholder="Search"
							value={searchCoin}
							onChange={handleInputChange}
						/>
					</div>
					<div className="watchlist-container">
						<p className="star">
							<Star />
						</p>
						<p className="watchlist">Watchlist</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
