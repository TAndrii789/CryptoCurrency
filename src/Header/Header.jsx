import logoImg from "/src/assets/logo.png";
import mgGlass from "/src/assets/mgGlass.png";
import Star from "/src/assets/Star.jsx";
import "./Header.css";

function Header() {
	const searchEl = document.getElementsByClassName("search");
	const searchBtn = document.getElementsByClassName("search-button");

	function showSearch() {
		searchEl[0].style.width = "17vw";
	}

	return (
		<>
			<div className="header">
				<img className="logo" src={logoImg} />
				<div className="header-right-part">
					<div className="search-container">
						<button className="search-button" onClick={() => showSearch()}>
							<img className="mg-glass" src={mgGlass} />
						</button>
						<input className="search" type="text" placeholder="Search" />
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
