import { useEffect, useState } from "react";
import "./DataFetching.css";

function DataFetching() {
	const [data, setData] = useState({
		rank: "",
		name: "",
		price: "",
		change: "",
		marketCap: "",
		volume: "",
	});

	useEffect(() => {
		fetch("https://api.coincap.io/v2/assets").then((response) =>
			response.json().then((apiData) => {
				setData((d) => ({
					...d,
					rank: apiData.data[0].rank,
					name: apiData.data[0].symbol,
					price:
						Math.round(
							(Number(apiData.data[0].priceUsd) + Number.EPSILON) * 100
						) / 100,
					change:
						Math.round(
							(Number(apiData.data[0].changePercent24Hr) + Number.EPSILON) * 100
						) /
							100 +
						"%",
					marketCap:
						Math.round(
							(Number(apiData.data[0].marketCapUsd) + Number.EPSILON) * 100
						) / 100,
					volume:
						Math.round(
							(Number(apiData.data[0].vwap24Hr) + Number.EPSILON) * 100
						) / 100,
				}));
			})
		);
	}, []);

	return (
		<div className="currency-element">
			<p>{data.rank}</p>
			<p>{data.name}</p>
			<p>{data.price}</p>
			<p>{data.change}</p>
			<p>{data.marketCap}</p>
			<p>{data.volume}</p>
		</div>
	);
}

export default DataFetching;
