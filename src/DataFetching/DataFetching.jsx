import { useContext, useEffect, useState } from "react";
import "./DataFetching.css";
import star from "/src/assets/star.png";
import { DataFromChildContext } from "../App";

function DataFetching() {
	const [data, setData] = useState([]);

	const searchCoin = useContext(DataFromChildContext);
	console.log(searchCoin)

	useEffect(() => {
		fetch("https://api.coincap.io/v2/assets").then((response) =>
			response.json().then((apiData) => {
				apiData.data.forEach((coin) => {
					let marketCR =
						Math.round((Number(coin.marketCapUsd) + Number.EPSILON) * 100) /
						100;

					const newCoin = {
						rank: coin.rank,
						name: coin.symbol + " " + coin.name,
						price:
							Math.round((Number(coin.priceUsd) + Number.EPSILON) * 100) / 100,
						change:
							Math.round(
								(Number(coin.changePercent24Hr) + Number.EPSILON) * 100
							) /
								100 +
							"%",
						marketCap: roundMarketCap(marketCR),
						volume:
							Math.round((Number(coin.vwap24Hr) + Number.EPSILON) * 100) / 100,
					};
					setData((d) => [...d, newCoin]);
				});
			})
		);
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

	return (
		<ul>
			{data.map((coin, index) => (
				<li key={index} className="currency-element">
					<div className="currency-rank">
						<img className="table-star" src={star} />
						{coin.rank}
					</div>
					<p>{coin.name}</p>
					<p>{coin.price}</p>
					<p>{coin.change}</p>
					<p>{coin.marketCap}</p>
					<p>{coin.volume}</p>
				</li>
			))}
		</ul>
	);
}

export default DataFetching;
