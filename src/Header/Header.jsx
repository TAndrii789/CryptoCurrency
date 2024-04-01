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
		// if (searchEl[0].style.width === "0px") {
		searchEl[0].style.width = "17vw";
		// }
		// else {
		// 	searchEl[0].style.width = "0";
		// }
	}

	const sendDataToParentHandler = () => {
		sendDataToParent(searchCoin);
	};

	// function handleInputChange(event) {
	// 	setSearchCoin(event.target.value);
	// }

	function findCoin(e) {
		if (searchCoin.length !== 0) {
			sendDataToParentHandler();
		}
		// e.preventDefault();
		inputRef.current.value = "";
	}

	return (
		<>
			<div className="header">
				<img className="logo" src={logoImg} />
				<div className="header-right-part">
					<div className="search-container">
						<button
							className="search-button"
							onClick={() => {
								showSearch();
								findCoin();
							}}
						>
							<img className="mg-glass" src={mgGlass} />
						</button>
						<input
							ref={inputRef}
							className="search"
							type="text"
							placeholder="Search"
							value={searchCoin}
							onChange={e=>setSearchCoin(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									findCoin(e);
								}
							}}
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
