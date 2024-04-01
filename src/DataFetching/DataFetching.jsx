import { useEffect, useState, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import "./DataFetching.css";
import "../Preloader/Preloader.css";
import Prelaoder from "../Preloader/Preloader.jsx";
import star from "/src/assets/star.png";
import { DataFromChildContext } from "../Pages/Home.jsx";

function DataFetching() {
	const linkStyle = {
		display: "grid",
		gridTemplateColumns: "repeat(6, 13vw)",
		color: "hsl(198, 100%, 45%)",
		border: "1px solid hsl(198, 100%, 45%)",
		paddingLeft: "1vw",
		marginBottom: ".5vh",
		padding: "1vw",
		textDecoration: "none",
		fontSize: "0.92em",
	};

	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState();
	const [data, setData] = useState([]);

	const searchCoin = useContext(DataFromChildContext);

	const filteredData = useMemo(() => {
		return data.filter((item) => {
			let concat = item.name + item.symbol;
			item = concat;
			return item.toLowerCase().includes(searchCoin.toLowerCase());
		});
	}, [data, searchCoin]);

	useEffect(() => {
		const fetchCrupto = async () => {
			setIsloading(true);

			try {
				await fetch("https://api.coincap.io/v2/assets").then((response) =>
					response.json().then((apiData) => {
						apiData.data.forEach((coin) => {
							let marketCR =
								Math.round((Number(coin.marketCapUsd) + Number.EPSILON) * 100) /
								100;
							let price = Number(coin.priceUsd);

							const newCoin = {
								rank: coin.rank,
								symbol: coin.symbol + " ",
								name: coin.name,
								price: priceRound(price),
								change:
									Math.round(
										(Number(coin.changePercent24Hr) + Number.EPSILON) * 100
									) /
										100 +
									"%",
								marketCap: roundMarketCap(marketCR),
								volume:
									Math.round((Number(coin.vwap24Hr) + Number.EPSILON) * 100) /
									100,
							};

							setData((d) => [...d, newCoin]);
						});
					})
				);
			} catch (e) {
				setError(e);
				console.log(e);
			} finally {
				setIsloading(false);
			}
		};
		fetchCrupto();
		filteredData
	}, []);

	const roundMarketCap = function (item) {
		item = item.toString();
		if (item.length >= 15) {
			item = Number(
				Math.round((item / 1000000000 + Number.EPSILON) * 100) / 100
			);
			return item + "B";
		} else if (item.length >= 12) {
			item = Number(Math.round((item / 1000000 + Number.EPSILON) * 100) / 100);
			return item + "M";
		} else if (item.length >= 9) {
			item = Number(Math.round((item / 1000 + Number.EPSILON) * 100) / 100);
			return item + "K";
		}
	};

	const priceRound = function (price) {
		if (price < 0.0001) {
			price = Math.round((price + Number.EPSILON) * 10000000) / 10000000;
		} else if (price < 1 && price > 0.0001) {
			price = Math.round((price + Number.EPSILON) * 10000) / 10000;
		} else {
			price = Math.round((price + Number.EPSILON) * 100) / 100;
		}
		return `${price}`;
	};

	if (isLoading) {
		return (
			<div>
				<Prelaoder />
			</div>
		);
	}

	if (error) {
		return (
			<div className="errorDataMessage">
				Something went wrong! Please try again.
			</div>
		);
	}

	return (
		<ul>
			{filteredData.map((coin, index) => (
				<Link
					key={index}
					className="currency-element"
					to={`/${coin.name}`}
					style={linkStyle}
				>
					<div className="currency-rank">
						<img className="table-star" src={star} />
						{coin.rank}
					</div>
					<p className="coin-symbol">
						<span>{coin.symbol}</span>
						{coin.name}
					</p>
					<p>{coin.price}</p>
					<p>{coin.change}</p>
					<p>{coin.marketCap}</p>
					<p>{coin.volume}</p>
				</Link>
			))}
		</ul>
	);
}

export default DataFetching;
